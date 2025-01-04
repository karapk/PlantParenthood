import Image from 'next/image';

export default function Indoor() {
  return (
  <div className="card" style={{width: "18rem"}}>
    <Image className="card-img-top" alt="Card image cap" src="/path/to/image.jpg" width={288} height={162} />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some of the content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
  </div>
  );
}