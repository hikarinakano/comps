import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  }
  const handleClose = () => {
    setShowModal(false);
  }
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>I accept</Button>
    </div>
  );
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>
  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod nisi vel lectus sagittis tincidunt. Nam bibendum mi vitae hendrerit convallis. Pellentesque laoreet, tellus non tristique iaculis, tellus est commodo purus, at congue nunc felis et nulla. Fusce laoreet ipsum in ante luctus, vitae dignissim purus vulputate. Morbi pulvinar nisl eget placerat tincidunt. In vestibulum id diam et dignissim. Vivamus porttitor pretium faucibus. Etiam vitae purus velit. Aliquam erat volutpat. Nam tincidunt elit ac lorem consectetur, sit amet mattis dui hendrerit. Sed lacinia ultrices mauris, id tristique arcu malesuada ut. Donec laoreet nibh lectus, vitae blandit dolor finibus quis. Nam quis vestibulum elit. Ut commodo venenatis enim non dapibus. In ultrices aliquet dictum. Phasellus ac tincidunt enim, et ultricies orci. </p>
      <p>Curabitur ex justo, ultricies eu tempor et, feugiat nec nisi. Aliquam lacus turpis, consequat in accumsan in, malesuada id magna. Sed sit amet dolor augue. Donec commodo orci a vehicula lobortis. Duis lobortis ut libero et volutpat. Suspendisse potenti. Nulla eu dolor sapien. Sed sed elementum massa. Suspendisse fringilla pellentesque nisl vel viverra. Mauris venenatis vulputate est dapibus blandit. Quisque et ante quam. In nisl lacus, cursus quis elit convallis, imperdiet varius justo. Vestibulum semper erat auctor nunc facilisis, eget congue ipsum consequat. </p>
      <p>Vestibulum pretium tempor mauris, a vehicula sapien tincidunt a. Vivamus felis erat, lacinia vitae porta nec, tempus ut nulla. Duis at leo fermentum orci tristique dignissim ullamcorper tempus tellus. Sed sed maximus nibh, at molestie purus. Sed dignissim eros justo, id suscipit arcu ornare et. Nullam nibh est, tempor id eleifend eget, vestibulum sit amet massa. Ut volutpat nisi eget lorem finibus, a imperdiet urna commodo. Fusce eleifend tempus ante in lobortis. </p>
      <p>Etiam arcu dolor, malesuada ut mollis id, iaculis eu purus. Etiam lobortis et sem at imperdiet. Mauris at lacus eu urna molestie scelerisque quis nec sem. Aenean sed ultrices turpis. Pellentesque vel mauris et arcu ullamcorper efficitur pulvinar sit amet lectus. Suspendisse non lacus nec velit congue fermentum. Suspendisse nec lorem pretium, auctor tellus quis, pharetra felis. Mauris mauris dui, imperdiet nec maximus nec, vehicula a nulla. Fusce luctus mi in urna molestie, sodales vestibulum nulla dictum. </p>
      <p>Aliquam tincidunt non dolor id congue. Pellentesque eu suscipit dolor, et lobortis leo. In molestie, lorem condimentum pulvinar blandit, nunc ante sodales risus, nec varius orci elit quis diam. Morbi a nulla est. Cras magna diam, interdum convallis viverra nec, egestas a erat. Nunc eleifend, arcu non blandit lacinia, magna nisi fringilla eros, quis porttitor augue neque non lorem. Cras et velit fringilla, faucibus enim sed, tempor massa. Donec commodo elit at mauris pulvinar consequat. </p>
    </div>
  );
}

export default ModalPage;