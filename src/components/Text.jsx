import './Text.css';

const Text = ({ highlight = "Our Mission", title, description, marginTop = '100px' }) => {
  return (
    <div className="text-container" style={{ marginTop }}>
      <h3 id="highlight">{highlight}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Text;
