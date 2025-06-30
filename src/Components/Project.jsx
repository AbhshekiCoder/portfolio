import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { app } from './Firebase';
import { getDatabase, ref, get } from 'firebase/database';

function Project({ Profile1 }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const db = getDatabase(app);
        const dataRef = ref(db, 'projects/');
        const snapshot = await get(dataRef);
        const projectList = snapshot.exists() ? Object.values(snapshot.val()) : [];
        setData(projectList);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      }
    };

    fetchProjects();
  }, []);

  const isLight = Profile1 === 'white';

  return (
    <div
      className="py-16 px-6 md:px-12 lg:px-24"
      style={{
        backgroundColor: isLight ? 'white' : '#111827',
        color: isLight ? 'black' : 'white',
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
        My Projects
      </h1>

      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={index}
            className="mb-20 p-6 rounded-xl shadow-lg"
            style={{
              backgroundColor: isLight ? '#f9f9f9' : '#1f2937',
              border: '1px solid #ccc',
            }}
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">{item.name}</h2>

            <Swiper
              className="rounded-md overflow-hidden"
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={30}
            >
              {item.img.map((element, idx) => (
                <SwiperSlide key={idx}>
                  {element.includes('.mp4') ? (
                    <video src={element} controls className="w-full h-auto rounded" />
                  ) : (
                    <img src={element} alt={`Project ${index + 1}`} className="w-full h-auto rounded" />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-aos="fade-up">
                <h3 className="text-xl font-semibold text-center mb-2" style={{ color: isLight ? 'black' : '#90cdf4' }}>
                  Description
                </h3>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300" style={{ color: isLight ? 'black' : '#90cdf4' }}>
                  {item.description}
                </p>
              </div>

              <div data-aos="fade-up">
                <h3 className="text-xl font-semibold text-center mb-2" style={{ color: isLight ? 'black' : '#90cdf4' }}>
                  Technologies Used
                </h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-300 " style={{ color: isLight ? 'black' : '#90cdf4' }}>
                  {item.technologies}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">Loading projects...</p>
      )}
    </div>
  );
}

export default Project;
