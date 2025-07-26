import './Text.css';

const Text = ({ highlight = "Our Mission", title, description }) => {
  return (
    <div className="text-container">
      <h3 id="highlight">{highlight}</h3>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Text;
