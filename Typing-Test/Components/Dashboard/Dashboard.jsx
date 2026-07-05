import '../Dashboard/Dashboard.css'
import { MobileDashboard } from './MobileDashboard'
import { DesktopDashboard } from './DesktopDasboard'
import { useEffect, useState } from 'react'
export function Dashboard(){
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    useEffect( () => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    
    return(
      <div>
        {isMobile ? <MobileDashboard/> : <DesktopDashboard/>}
      </div>
    )
}