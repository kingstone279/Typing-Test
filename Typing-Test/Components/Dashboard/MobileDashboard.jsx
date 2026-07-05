import '../Dashboard/MobileDashboard.css'
export function MobileDashboard(){
   return(
   <>
      <div className='mobile-dashboard'>
        <div className="mobile-game-stats">
            <div className="mobile-wpm">
                <p>WPM:</p>
                <p>20</p>
            </div>
            <div className="mobile-acuracy">
                <p>Acuracy:</p>
                <p>94</p>
            </div>
            <div className="mobile-time">
                <p>Time:</p>
                <p>0:46</p>
            </div>
        </div>
        <div className="mobile-game-settings">
                <select name="difficulty" >
                    <option value="easy">Easy</option>
                    <option value="easy">Medium</option>
                    <option value="easy">Hard</option>
                </select>
                <select name="mode" >
                    <option value="easy">Timed(60s)</option>
                    <option value="easy">Passage</option>
                </select>
        </div>
      </div>
   </>)

}