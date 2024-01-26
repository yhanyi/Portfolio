import React from "react";
import { coursesData } from "@/lib/courses-data";
import TrackCarousel from "@/components/carousel";

type CourseDataProps = (typeof coursesData)[number];

export default function Certificates() {
  return (
    <main>
      <div className="flex flex-col justify-center">
        {coursesData.map((course: CourseDataProps, index) => (
          <React.Fragment key={index}>
            <TrackCarousel
              track={course.track}
              certificates={course.certificates}
            />
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
