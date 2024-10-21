import { supabase } from '@/supabase/supabaseClient';

const CVDownload = async () => {
  try {
    const { data, error } = await supabase
      .storage
      .from('cv')
      .download(`/public/cv.pdf`);
    
    if (error) {
      throw error;
    }

    // 파일 다운로드 Blob 데이터를 처리하는 로직
    const url = URL.createObjectURL(data);
    
    // 다운로드 링크를 생성하고 자동 클릭
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.pdf'; // 다운로드 시 파일 이름 설정
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // 링크를 DOM에서 제거

    // Object URL 제거 (메모리 누수 방지)
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error fetching image URL:', error);
    return null;
  }
};

export {
  CVDownload
}