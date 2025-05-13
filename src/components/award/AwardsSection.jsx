//  import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const awardsData = [
//   {
//     id: 1,
//     title: 'Best Resort 2020',
//     description: 'Awarded for excellence.',
//     image: '../../assets/images/awards/awards1.png'
//   },
//   {
//     id: 2,
//     title: 'Traveler’s Choice 2021',
//     description: 'Top reviews and ratings.',
//     image: '../../assets/images/awards/awards2.png'
//   },
//   {
//     id: 3,
//     title: 'Luxury Experience 2022',
//     description: 'Best in luxury travel.',
//     image: '../../assets/images/awards/awards3.png'
//   },
//   {
//     id: 4,
//     title: 'Eco-Friendly Resort',
//     description: 'For sustainability practices.',
//     image: '../../assets/images/awards/awards4.png'
//   },
//   {
//     id: 5,
//     title: 'Customer Satisfaction',
//     description: 'Outstanding service.',
//     image: '../../assets/images/awards/awards5.png'
//   },
//   {
//     id: 6,
//     title: 'Innovation in Hospitality',
//     description: 'Modern tech usage.',
//    image: '../../assets/images/awards/osa.gif'
//   },
//   {
//     id: 7,
//     title: 'Top 10 Beach Resort',
//     description: 'Beautiful beachfront.',
//    image: '../../assets/images/awards/tripadvisor.jpg'
//   },
  
// ];

// const AwardsSection = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const visibleCount = 5;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);



//   const getVisibleAwards = () => {
//     let endIndex = startIndex + visibleCount;
//     if (endIndex <= awardsData.length) {
//       return awardsData.slice(startIndex, endIndex);
//     } else {
//       return [
//         ...awardsData.slice(startIndex),
//         ...awardsData.slice(0, endIndex - awardsData.length),
//       ];
//     }
//   };

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Our Awards</h2>
//       <Row className="g-3 justify-content-center">
//         {getVisibleAwards().map((award) => (
//           <Col key={award.id} xs={12} sm={6} md={4} lg={2}>
//             <Card className="h-100 text-center p-3 shadow-sm">
//               <Card.Img
//                 variant="top"
//                 src={award.image}
//                 alt={award.title}
//                 style={{
//                   width: '120px',
//                   height: '150px',
//                   objectFit: 'contain',
//                   margin: '0 auto'
//                 }}
//               />
//               {/* <Card.Body>
//                 <Card.Title style={{ fontSize: '1rem' }}>{award.title}</Card.Title>
//                 <Card.Text style={{ fontSize: '0.9rem' }}>{award.description}</Card.Text>
//               </Card.Body> */}
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default AwardsSection;


  import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getAwards } from '../../api/getAwards';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AwardsSection = () => {
  const [awards, setAwards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const visibleCount = 5;

  // Fetch awards from API
 useEffect(() => {
  getAwards()
    .then((data) => {
      if (data?.awards) {
        // Sort awards by the `sorting` key before setting them
        const sortedAwards = [...data.awards].sort((a, b) => a.sorting - b.sorting);
        setAwards(sortedAwards);
      }
    })
    .catch((err) => {
      console.error('Error fetching awards:', err);
    })
    .finally(() => setLoading(false));
}, []);


  // Auto-scroll behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        awards.length > 0 ? (prevIndex + 1) % awards.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [awards]);

  // Get currently visible awards
  const getVisibleAwards = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= awards.length) {
      return awards.slice(startIndex, endIndex);
    } else {
      return [...awards.slice(startIndex), ...awards.slice(0, endIndex - awards.length)];
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Awards & Recognition</h2>
      <Row className="g-3 justify-content-center">
        {loading
          ? Array.from({ length: visibleCount }).map((_, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} lg={2}>
                <Skeleton height={180} />
              </Col>
            ))
          : getVisibleAwards().map((award) => (
              <Col key={award.id} xs={12} sm={6} md={4} lg={2}>
                <Card className="h-100 text-center p-3 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={award.image}
                    alt={`Award ${award.id}`}
                    loading="lazy"
                    style={{
                      width: '120px',
                      height: '150px',
                      objectFit: 'contain',
                      margin: '0 auto',
                    }}
                  />
                </Card>
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default AwardsSection;
