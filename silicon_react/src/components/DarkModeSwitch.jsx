import React, { useEffect, useState } from 'react';

function DarkModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
            document.body.classList.add('darkmode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('darkmode');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true)
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkMode(false)
        }
    }, [])


  return (

    <div className="btn-toggle-switch">
    <span className="label">Dark Mode</span>
    <label className="toggle-switch" >
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
        <span className="slider round"></span>
    </label>
</div>

  )
}

export default DarkModeSwitch
