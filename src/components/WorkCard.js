import React from 'react'
import './WorkCardStyle.css';
import {NavLink} from 'react-router-dom';
import courseManager from '../assets/courseManager.png';
import ecommerce from '../assets/ecommerce.png';
import Vaccination from '../assets/vaccine.png';

function WorkCard() {
  return (
    <div className='work-container'>

        <div className='project-container'>
            <div className='project-card'>
                <h2 className='project-title'>ecommerce-backend</h2>
                <img className='project-img' src={ecommerce} alt='image'/>
                <div className='project-details'>
                    <p>
                    Built an online shopping application consisting more than 10 APIs for creation,
                    retrieval,  <br/>updatation and deletion of sellers, products, customers, <br/> cart and card of
                    customer, and more custom apis.
                    <br/>
                    ➔ Utilized Hibernate ORM for database connectivity to MySQL/PostgreSQL <br/> and DTOs
                    to ensure privacy of data. <br/>
                    ➔ Enabled user to create to register themselves and place an order. <br/>
                    ➔ Enabled user to add their card details, add items to cart and eventually checkout. <br/>
                    ➔ Enabled customer to fetch product list by specifying category or price along with
                    category. <br/>
                    ➔ Integrated email functionality to send mail to user on order confirmation,  <br/>shipping
                    updates and Swagger for API documentation. <br/>
                    ➔ Implemented custom exception class to provide clear and informative error
                    message. <br/>
                    ➔ Tech Stack used - Java, Spring Boot, SQL, JPA/Hibernate, PostgreSQL.
                    </p>
                    <div className='pro-btns'>
                        <NavLink to='https://github.com/bhanusingh008/ecommerce-backend' className='btn'  target='_blank'>Source</NavLink>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <h2 className='project-title'>Course Manager</h2>
                <img className='project-img' src={courseManager} alt='image'/>
                <div className='project-details'>
                    <p>
                    ➔A full-stack web application, made for keeping track <br/>
                        of list of courses taken.<br/>
                    ➔Frontend is taken care of using React and for the backend Spring Boot.
                    <br/>
                    ➔Data is stored in SQL database and is manipulated using hibernate ORM.<br/>
                    ➔Allowed to perform Create, Read, Update, Delete actions on the courses.<br/>
                    ➔ Tech Stack used - Java, Spring Boot, SQL, JPA/Hibernate, React, CSS.
                    </p>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='https://github.com/bhanusingh008/CourseWebApp' target='_blank'>Source</NavLink>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <h2 className='project-title'>Vaccination Booking System</h2>
                <img className='project-img' src={Vaccination} alt='image'/>
                <div className='project-details'>
                    <p>
                    ➔ Created a system of more than 12 APIs, to allow a person to register, book an
                    appointment by selecting a vaccination center and a doctor.<br/>
                    ➔ Provided a certificate upon taking the doses, sent directly to the registered email
                    id of the user.<br/>
                    ➔ Used Hibernate ORM for database connections and operations, on SQL Database,
                    also created custom query for custom apis, on top of Jpa.<br/>
                    ➔ Secured information by providing Data transfer Objects(DTOs), Also applied best
                    practices to make code readable and reusable.<br/>
                    ➔ Integrated Swagger for api documentation and testing.<br/>
                    ➔ Tech Stack used - Java, Spring Boot, SQL, JPA/Hibernate.
                    </p>
                    <div className='pro-btns'>
                        <NavLink className='btn' to='https://github.com/bhanusingh008/vaccine-booking-app' target='_blank'>Source</NavLink>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default WorkCard