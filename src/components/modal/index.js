import './styles.css'

const Modal = ({ show, onClose, title, body }) => {
  if (!show) return null;
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2>{title}</h2>
        </div>
        <div className='modal-body'>
          {body}
        </div>
        <div className='modal-footer'>
          <button className='close' onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;