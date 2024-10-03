
function HomeIcon({ color = 'black', size = '24px' }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill={color}
        width={size}
        height={size}
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    );
  }
  
  export default HomeIcon;
  