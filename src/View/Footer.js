function Footer({items}) {
  const prepared = items.reduce((acc, curr) => acc + curr.checked, 0);

  return (
    <div className='stats'>
      {items.length === prepared ? "여행 준비가 끝 났습니다. 출발..."
        : `총 ${items.length}개의 아이템 중 ${prepared}개를 준비했습니다.`}
    </div>
  );
}

export default Footer