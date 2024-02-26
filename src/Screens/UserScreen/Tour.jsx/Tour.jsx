import { Container, Row, Col } from "react-bootstrap";
import tourmapImage from "../../../Assets/tour_map_desktop@3x.png";
import discussionImage from "../../../Assets/tour_start_discussion_desktop@3x.png";
import inviteImage from "../../../Assets/tour_invite_desktop@3x.png";
import rateImage from "../../../Assets/tour_impact_desktop@3x.png";
import persepectiveImage from "../../../Assets/tour_perspectives_desktop@3x-5.png";
import linkImage from "../../../Assets/tour_link_desktop@3x.png";
import collaborateImage from "../../../Assets/tour_comments_desktop@3x.png";
import reviewImage from "../../../Assets/tour_changes_desktop@3x.png";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";

function Tour() {
  return (
    <>
      <Header />
      <div class="tour-main">
        <section class="tour-banner">
          <Container>
            <Row>
              <Col className="bg text-center" dir="rtl">
                <h1 className="text-white">פלטפורמת דיונים המופעלת על ידי הגיון</h1>
                <p className="pt-4">
                  דיון דיון חותך את הרעש הקשור בדרך כלל למדיה חברתית ומקוונת, מה
                  שמקל על השתתפות בדיון ממוקד.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="video-section space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <video width="100%" controls className="mx-auto d-block">
                      <source
                        src="https://www.example.com/your-video.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="how-works space-class">
          <Container>
            <Row>
              <div className="container">
                <h2 className="text-center">איך עובד דיון דיון?</h2>
                <div className="row flex-md-row flex-column-reverse">
                  <div className="col-md-6">
                    <img
                      src={tourmapImage}
                      alt="How works"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6" dir="rtl">
                    <h3>מפה דיונים, ראה נושאים מורכבים בבירור</h3>
                    <p>
                      דיון דיון מאפשר לך לדמיין ויכוחים כעץ אינטראקטיבי של
                      טיעונים בעד ונגד. בראש התזה, הנתמכת או נחלשת על ידי טיעוני
                      בעד ונגד למטה. כל אחד מהטיעונים הללו יכול להסתעף לטיעונים
                      הבאים התומכים או תוקפים אותם בתורם.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row">
                  <div className="col-md-6" dir="rtl">
                    <h3>התחל דיון</h3>
                    <p>
                      דיונים חדשים הם פרטיים כברירת מחדל וניתן לראות אותם רק על
                      ידך. כל שעליך לעשות הוא לכתוב תיאור קצר, להגדיר את התזה
                      שלך (או התזה) ולהוסיף תמונה.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={discussionImage}
                      alt="Discussion"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row flex-md-row flex-column-reverse">
                  <div className="col-md-6">
                    <img src={inviteImage} alt="Invite" className="img-fluid" />
                  </div>
                  <div className="col-md-6" dir="rtl">
                    <h3>להזמין אנשים</h3>
                    <p>
                      לאחר יצירת דיון, הזמן אחרים להתווכח ולתרום. פרסם את הדיון
                      כדי להפוך אותו לזמין לציבור לכל משתמשי Diyung..
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row">
                  <div className="col-md-6" dir="rtl">
                    <h3>דרג טיעונים על סמך השפעתם</h3>
                    <p>
                      דרג את התזה ואת כל הטיעונים הכלולים מתחת לפי השפעתם על
                      הטיעון האב שלהם. מדי השפעה מציינים את הדירוגים האלה כדי
                      להעביר טיעונים משפיעים לראש הדף.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img src={rateImage} alt="Rate" className="img-fluid" />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <Col className="bg text-center" dir="rtl">
                <h3>תראה איך הצד השני חושב</h3>
                <p className="pb-4 mw-700">
                  על ידי החלפת פרספקטיבה, אתה יכול לראות את עץ הדיון כולו דרך
                  עיניהם של אנשים, מתנגדים או קבוצות שונות כדי להבין טוב יותר את
                  החשיבה שלהם.
                </p>
                <img
                  src={persepectiveImage}
                  alt="Invite"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row flex-md-row flex-column-reverse">
                  <div className="col-md-6">
                    <img src={linkImage} alt="Invite " className="img-fluid" />
                  </div>
                  <div className="col-md-6" dir="rtl">
                    <h3>קישור ארגומנטים למספר מיקומים</h3>
                    <p>
                      קשר בקלות ארגומנטים - יחד עם ארגומנטים צאצאים מתחת - למספר
                      מיקומים. שינויים בארגומנטים מקושרים באים לידי ביטוי בכל
                      המיקומים.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row">
                  <div className="col-md-6" dir="rtl">
                    <h3>שתפו פעולה בלי להעמיס על הדיון</h3>
                    <p>
                      הערות נשארות מחוץ לדיון הרשמי, כך שתוכל לדבר עם אנשים
                      אחרים על בעיות בניסוח, להציע הצעות או לשאול שאלות לגבי
                      ויכוח.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={collaborateImage}
                      alt="Collaborate "
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <div className="container">
                <div className="row flex-md-row flex-column-reverse">
                  <div className="col-md-6">
                    <img src={reviewImage} alt="Invite" className="img-fluid" />
                  </div>
                  <div className="col-md-6" dir="rtl">
                    <h3>בדוק שינויים, התעדכן במהירות</h3>
                    <p>
                      עקוב אחר כל סוגי השינויים השונים שנעשו בדיון על ידי לחיצה
                      על הסמלים הכחולים. המשך מאיפה שהפסקת בכל פעם שאתה חוזר
                      לדיון.
                    </p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section class="blue-head space-class">
          <Container>
            <Row>
              <Col className="bg text-center" dir="rtl">
                <h3>צור צוות דיון משלך</h3>
                <p>
                  Diyung Debate מאפשר לך להקים צוותים, להזמין משתמשים וליצור
                  דיונים שרק חברי צוות אחרים יכולים לראות. אתה יכול גם להזמין את
                  הצוות שלך לדיונים קיימים.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section class="textwithButton space-class" dir="rtl">
          <Container>
            <Row>
              <Col className="bg text-center">
                <h3 className="text-white mb-4">הצטרף לדיון</h3>
                <button class="explore-btn" href="#">
                  לַחקוֹר
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Tour;
