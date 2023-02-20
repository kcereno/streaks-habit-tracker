import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';

function ViewToggle() {
  const { setView, view } = useContext(AppContext);
  const handleGridButtonClick = () => {
    setView('grid');
  };

  const handleBoardButtonClick = () => {
    setView('board');
  };

  return (
    <div className="flex justify-center ">
      <div className="btn-group my-6">
        <button
          type="button"
          className={`btn btn-sm ${view === 'board' && 'btn-active'}`}
          onClick={handleBoardButtonClick}
        >
          board
        </button>
        <button
          type="button"
          className={`btn btn-sm ${view === 'grid' && 'btn-active'}`}
          onClick={handleGridButtonClick}
        >
          grid
        </button>
      </div>
    </div>
  );
}

export default ViewToggle;
