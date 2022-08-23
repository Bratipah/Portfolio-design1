import React from 'react'

function RecentPost() {
  return (
    <section className='recents-posts'>
        <div className='recents'>
            <div className='recentsH-left'>
                <h2>Recent Posts</h2> 
            </div>
            <div className='recentsH-right'>
                <Link to='/works'>View all</Link>
            </div>
            <div>
                <card className='recents1'>
                <h3>Ghsbdugedw</h3>
                </card>
                <card className='recents2'>
                <h3>ahebubhbfsnhbd</h3>
                </card>
            </div>
        
        </div>

    </section>
  )
}

export default RecentPost