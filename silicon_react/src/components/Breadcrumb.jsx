import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className="breadcrumb-section">
        <div>
            <ul>
                <li>
                    <Link to={"/"} className='crumb_link' ><p><i className="fa-solid fa-house"></i>  Homepage</p></Link>
                </li>
                <li><p><i className="fa-solid fa-angles-right"></i></p> </li>
                {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <li key={to}>
                                { index === pathnames.length - 1 
                                    ? (<span><p className='crumb_focus'>{value.replace(/-/g, ' ')}</p></span>)
                                    : (<Link to={to}><p>{value.replace(/-/g, ' ')}</p></Link>)}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Breadcrumb
