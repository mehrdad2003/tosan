import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
export default function Job({job}) {
    const [open, setOpen] = useState(false)
    return (
        
        <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
           <Card.Img variant="top" src={job.image} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              <span className="text-muted font-weight-light">{job.description}</span>
            </Card.Title>
            {/* <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle> */}
            <Badge variant="secondary" className="mr-2">توسن</Badge>
            {/* <Badge variant="secondary">irna</Badge> */}
            <div style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            variant="primary"
          >
            {open ? 'کمتر' : 'بیشتر'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
           {
            job.detail.map((item,index)=>{
              return <div key={index}>
                <Card.Text>
                {item.power}
                </Card.Text>
                <Card.Text>
                {item.senezam}
                </Card.Text>
                <Card.Text>
                {item.wood}
                </Card.Text>
                <Card.Text>
                  {item.iron}
                </Card.Text>  
                 {item.betoon&& <Card.Text>
                  {item.betoon}
                </Card.Text>   }
                <Card.Link href="https://song.storage.iran.liara.space/diagram_1.jpg">eqms</Card.Link>
                <Card.Link href="https://www.aparat.com/v/6T48e">فیلم</Card.Link>
              </div>
            })
           }
          </div>
        </Collapse>
      </Card.Body>
    </Card>
    )
}
