import { Container } from "react-bootstrap";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="about-pg" dir="rtl">
        <section className="section-about">
          <Container>
            <h1 className="text-primary">לורם איפסום</h1>
            <div className="row row-abt">
              <div className="colm-abt1 col-md-6">
                <p>
                  לוחצים על הכפתור שמתחת, מקבלים לורם איפסום טרי ורענן, בוחרים
                  את כמות הטקסט הרצויה, מעתיקים, ומדביקים בתוכנת העיצוב הרצויה.
                  או אז, אפשר לתת לו את איפיוני העיצוב הדרושים לסקיצה.
                </p>
                <p>
                  לורם איפסום הוא טקסט חסר הקשר וחסר משמעות בכוונה - וזאת כדי
                  שעין הקורא לא "תצוד" בזמן הרפרוף עליו, מילה שתסיח את דעתו.
                  לורם איפסום תוכנן בקפידה כך שיחקה במרקם ובקצב שלו טקסט אמיתי
                  בעברית. אתר lorem-ipsum.co.il מציע לראשונה בישראל טקסט לורם
                  איפסום בעברית לטובת כל מעצבי האתרים, המעצבים הגרפיים,
                  הגרפיקאים, עורכים גרפיים, ובעצם כל אחד
                </p>
                <p>אז למה לא להכניס לסקיצה ג'יבריש?</p>
                <p>
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
                  אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט
                  דולור, קראס אגת לקטוס וואל אאוגו
                </p>
                <p>
                  <a
                    href="#"
                    className="link-primary text-decoration-underline"
                  >
                    יתרונות לורם איפסום באתר lorem-ipsum.co.il:
                    <br /> אורך מילים, משפטים ופסקאות מגוון ואמיתי
                  </a>
                </p>
              </div>
              <div className="colm-abt2 col-md-6">
                <h2>
                  <a href="#" className="link-primary">
                    לורם איפסום
                  </a>
                </h2>
                <p>
                  לורם איפסום
                  <br /> דולור סיט אמט, קונסקט
                  <br />
                  תמהיל ומיקום נכון של אותיות סופיות.
                  <br />
                  לורם איפסום
                </p>
                <p>
                  <a
                    href="#"
                    className="link-primary text-decoration-underline"
                  >
                    איך משתמשים{" "}
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default About;
