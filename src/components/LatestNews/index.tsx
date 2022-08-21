import "./index.scss";

export const LatestNews = () => {
  return (
    <div className="news">
      <p className="news_header_title">Últimas Notícias</p>

      <div className="news_container">
        <NewsContent
          title={"21 Savage e Metro Boomin lançam o álbum “Savage Mode 2”"}
        />
        <NewsContent title={"Wavves anuncia novo álbum, Hideaway"} />
        <NewsContent
          title={
            "The Weeknd quebra novo recorde na Billboard em parceria com Ariana Grande"
          }
        />
        <NewsContent
          title={"21 Savage e Metro Boomin lançam o álbum “Savage Mode 2”"}
        />
        <NewsContent title={"Wavves anuncia novo álbum, Hideaway"} />
        <NewsContent
          title={
            "The Weeknd quebra novo recorde na Billboard em parceria com Ariana Grande"
          }
        />
      </div>
    </div>
  );
};

const NewsContent = ({ title }) => {
  return (
    <div className="news_content">
      <p className="news_content_title">{title}</p>
      <p className="news_content_date">1 mês atrás</p>
      <div className="news_content_line"></div>
    </div>
  );
};
