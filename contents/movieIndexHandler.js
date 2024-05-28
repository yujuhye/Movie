export let currentMovieIndex = 0; // 초기값을 null로 설정

export const setMovieIndex = (index) => {
  currentMovieIndex = index !== null ? index : currentMovieIndex;
  console.log('현재 영화:', currentMovieIndex);
};

export const getMovieIndex = () => {
  return currentMovieIndex;
};

// 영화 데이터 불러오기
export const fetchMovieData = async () => {
  try {
    const response = await fetch('/MovieDB.json');

    if (!response.ok) {
      throw new Error('네트워크 응답이 실패했습니다.');
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('JSON 형식의 데이터가 아닙니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('데이터를 가져오는 중 에러 발생:', error);
    throw error;
  }
};
