import React from 'react';

function Sidenav({classPosition,classBgColor}) {
    let classes = "sidenav texto"
    let Color=(classBgColor?classBgColor:"blue")
    let position=(classPosition?classPosition:"")
    classes=classes+" "+Color+" "+position    
    return (
        <div className={classes}>
            SIDENAV            
        </div>
    )
}
export default Sidenav