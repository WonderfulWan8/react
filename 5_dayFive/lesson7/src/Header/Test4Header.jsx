function Header({ onChange }) {
  const name = 'dell';
  return (
    <>
      <div onClick={onChange} style={{ borderBottom: '1px solid black' }}>
        Header
      </div>
    </>
  );
}

export default Header;
