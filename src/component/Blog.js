import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Skeleton from 'react-loading-skeleton';
const NEWSKEY='0411669c509b42cc94fbe9435887421d';
function Blog() {
    const [blogInfo, setBlogInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        const getBlog = async () => {
            setLoading(true);
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=0411669c509b42cc94fbe9435887421d');
            if (componentMounted) {
                let BlogDetails= await response.json();
                //console.log('testData',BlogDetails)
                setBlogInfo(BlogDetails);
                //setFilter(await response.json());
                setLoading(false);
                
            }
            return () => {
                //console.log('productss')
                componentMounted = false;
            }
        }
        getBlog();
    }, []);
    const Loading = () => {
      return (
          <>
           <div className="col-md-3">
           <Skeleton height={350} className={`border`}/>
           </div>
           <div className="col-md-3">
           <Skeleton height={350} className={`react-loading-skeleton border`}/>
           </div>
           <div className="col-md-3">
           <Skeleton height={350} className={`border`}/>
           </div>
           <div className="col-md-3">
           <Skeleton height={350} className={`border`}/>
           </div>
             
          </>
      )
  }
  let BlogShow=()=>{
console.log('blogInfo',blogInfo)
    return (
      <>
      {blogInfo?.articles && blogInfo?.articles.map((item, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src={item.urlToImage} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {/* {`${item['description'].substring(0,120)}`} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
      </>
    );
  }
  return (
    <>
    <Container>
      <h1 className='text-center my-5'>Latest Blog</h1>
      <hr />
      <Row xs={1} md={4} className="g-4 my-4">
      {loading ? <Loading /> : <BlogShow />}
    </Row>
    </Container>
    </>
  );
}

export default Blog;