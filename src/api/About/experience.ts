import { supabase } from '@/supabase/supabaseClient'

export interface ExperienceProps {
  id: number;
  start_date: string;
  end_date: string;
  company_name: string;
  thumbnail: string | null;
  role: string;
  stack: string;
  experience_content: {
    id: number;
    content: string;
    sort: string;
  }[];
};

const getExperienceList = async () => {
  const { data: stocks, error } = await supabase
    .from('experience')
    .select(`id,
      start_date,
      end_date,
      company_name,
      thumbnail,
      role,
      stack,
      experience_content (
        id,
        content,
        sort
      )
    `)
    .order('id', { ascending: false });
  
  
  if (error) {
    console.error(error)
    return [];
  }

  console.log('hi');
  console.log(stocks);

  return stocks as ExperienceProps[];
};

export {
  getExperienceList
};