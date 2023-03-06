import "./_device-anim.scss";
function DeviceAnim({ img_src, vid_src, modifiers }) {
  return (
    <div className={`device-anim ${modifiers}`}>
      <img className="device-anim__img" src={img_src} alt="" />
      <div className="device-anim__vid-container">
        <video className="device-anim__vid" autoPlay muted loop>
          <source src={vid_src} />
        </video>
      </div>
    </div>
  );
}

export default DeviceAnim;
