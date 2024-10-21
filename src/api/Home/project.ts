import { supabase } from '@/supabase/supabaseClient'

// export interface ModelProps {
//   id: number;
//   name: string;
//   gender: 'M' | 'F';
//   instagram: string;
// };a

export interface ProjectProps {
  id: number;
  name_KR: string;
  name_EN: string;
  name_JP: string;
  thumbnail: string | null;
  value: string;
}

const getProjectList = async () => {
  const { data: stocks, error } = await supabase
    .from('project')
    .select('id, name_KR, name_EN, name_JP, thumbnail, value');

  if (error) {
    console.error(error)
    return [];
  }

  return stocks as ProjectProps[];
};

export {
  getProjectList
};