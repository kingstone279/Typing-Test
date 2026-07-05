import '../Dashboard/DesktopDashboard.css'
export function DesktopDashboard(){
   return(
   <>
      <div className='dashboard'>
        <div className="game-stats">WPM:  20 | Acuracy:  94% | Time:  0:46</div>
        <div className="game-settings">
            <div className="difficulty-modes">
                Difficulty: 
                <button>Easy</button>
                <button>Medium</button>
                <button>Hard</button>
            </div>
            <div className="mode">
                Mode:
                <button>Timed(60s)</button>
                <button>Passage</button>
            </div>
        </div>
      </div>
   </>)

}