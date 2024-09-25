// components/About1.tsx
import React from 'react';
import './about1.scss'; // Import the SCSS file for styles
import About2 from '../about2/page';
import About3 from '../about3/page';
import About4 from '../about4/page';
import About5 from '../about5/page';
import Header from '@/app/Header/page';

// Define a union type for text alignment
type TextAlign = 'left' | 'right' | 'center' | 'justify';

interface BackgroundImage {
  id: number;
  url: string;
  alt: string;
  source: string;
  size: string;
}

interface Settings {
  flex_direction: string;
  background_background: string;
  padding: {
    unit: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    isLinked: boolean;
  };
  background_image: BackgroundImage;
  background_position: string;
  background_size: string;
}

interface Element {
  id: string;
  settings: {
    title: string;
    header_size: string;
    align: TextAlign; // Use the defined union type here
  };
  widgetType: string;
  elType: string;
}

interface Content {
  id: string;
  settings: Settings;
  elements: Element[];
  isInner: boolean;
  elType: string;
}

interface AboutData {
  version: string;
  title: string;
  type: string;
  metadata: {
    template_type: string;
    include_in_zip: string;
    elementor_pro_required: string;
    wp_page_template: string;
  };
  content: Content[];
}

const About1: React.FC = () => {
  const data: AboutData = {
    version: "0.4",
    title: "About Us",
    type: "page",
    metadata: {
      template_type: "single-page",
      include_in_zip: "1",
      elementor_pro_required: "1",
      wp_page_template: "elementor_header_footer"
    },
    content: [
      {
        id: "3d58549e",
        settings: {
          flex_direction: "row",
          background_background: "classic",
          padding: {
            unit: "%",
            top: "7",
            right: "0",
            bottom: "0",
            left: "0",
            isLinked: false
          },
          background_image: {
            id: 28,
            url: "http://kit.creativemox.com/gambit/wp-content/uploads/sites/10/2023/10/chess-board-game-concept-for-competition-and-strategy-4-e1698108413284.jpg",
            alt: "",
            source: "library",
            size: ""
          },
          background_position: "center center",
          background_size: "cover"
        },
        elements: [
          {
            id: "22719bfa",
            settings: {
              title: "Heading",
              header_size: "h1",
              align: "center" as TextAlign // Explicitly cast to TextAlign
            },
            widgetType: "heading",
            elType: "widget"
          },
          {
            id: "22f4714d",
            settings: {
              title: "Competitions, friendship and learning: this is what we offer here. Welcome to your chess home",
              header_size: "h4",
              align: "center" as TextAlign // Explicitly cast to TextAlign
            },
            widgetType: "heading",
            elType: "widget"
          }
        ],
        isInner: false,
        elType: "container"
      }
    ]
  };

  return (
    <div>
      <Header />
    <div

      className="about1"
      style={{
        backgroundImage: `url(${data.content[0].settings.background_image.url})`,
        backgroundPosition: data.content[0].settings.background_position,
        backgroundSize: data.content[0].settings.background_size,
        paddingTop: `${data.content[0].settings.padding.top}%`,
      }}
    >
      <div className="about1__content">
        {data.content[0].elements.map((element) => {
          if (element.widgetType === "heading") {
            return (
              <h1
                key={element.id}
                className={`about1__heading about1__heading--${element.settings.header_size.toLowerCase()}`}
                style={{ textAlign: element.settings.align }}
              >
                {element.settings.title}
              </h1>
            );
          }
          return null; // Handle other widget types if necessary
        })}
      </div>
     
    </div>
     <About2 />
     <About3 />
     <About4 />
     <About5 />
     </div>
  );
};

export default About1;
