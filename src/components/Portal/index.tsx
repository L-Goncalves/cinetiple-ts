import ReactDOM, { createPortal } from 'react-dom';

function ReactPortal({ children, wrapperId }) {
    return ReactDOM.createPortal(
        <>
          <div>
            Hi
          </div>
        </>,
        document.getElementById('app-modal') as HTMLElement,
      );
}
export default ReactPortal;