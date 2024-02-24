import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    duration: 800, // ระยะเวลาในการเล่น animation (ms)
    easing: "ease-in-out", // ลักษณะของการเล่น animation
    once: false, // เล่น animation เพียงครั้งเดียวเมื่อเลื่อนลงมาหากองค์ประกอบเดียวกัน
  });
};

export default initAOS;