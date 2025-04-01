document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const favoritesSection = document.getElementById("favorites-section");

    toggleBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn chuyển hướng trang khi nhấn vào link

        if (favoritesSection.style.display === "none") {
            favoritesSection.style.display = "block";
            toggleBtn.innerHTML = "🔽 see less"; // Đổi nội dung nút
        } else {
            favoritesSection.style.display = "none";
            toggleBtn.innerHTML = "🔼 see more";
        }
    });
});
//đổi ngôn ngữ
const translations = {
    vi: {
        "job-title": "Công nghệ thông tin",
        "about-title": "Giới Thiệu",
        "about-name": "Họ và tên: Nguyễn Mạnh Phát",
        "about-sex": "Giới tính: Nam",
        "about-dob": "Ngày sinh: 09-09-2005",
        "about-hometown": "Quê quán: Thủ Dầu Một, Bình Dương, Việt Nam",
        "favorites-title": "VỀ SỞ THÍCH CỦA TÔI",
        "fav-badminton": "Cầu lông",
        "fav-football": "Bóng đá",
        "fav-gaming": "Chơi game",
        "fav-cooking": "Nấu ăn",
        "experience-title": "Kinh Nghiệm Làm Việc",
        "experience-job1-title": "Kỹ Sư Phần Mềm",
        "experience-job1-company": "Công ty ABC Tech",
        "experience-job1-desc1": "-Phát triển và bảo trì ứng dụng web sử dụng React.js và Node.js.",
        "experience-job1-desc2": "-Thiết kế và tối ưu cơ sở dữ liệu MongoDB và PostgreSQL.",
        "experience-job1-desc3": "-Triển khai và quản lý hệ thống trên nền tảng AWS (EC2, S3, Lambda).",
        "experience-job1-desc4": "-Hợp tác với đội QA để kiểm thử, sửa lỗi và nâng cao hiệu suất hệ thống.",
        "experience-job1-desc5": "-Xây dựng API RESTful và tích hợp với dịch vụ bên thứ ba.",
        "experience-job2-title": "Lập trình viên Backend",
        "experience-job2-company": "Công ty XYZ Solutions",
        "experience-job2-desc1": "-Thiết kế và phát triển hệ thống backend sử dụng Python (Django) và Node.js.",
        "experience-job2-desc2": "-Tối ưu hóa hiệu suất truy vấn dữ liệu và tăng cường bảo mật hệ thống.",
        "experience-job2-desc3": "-Xây dựng microservices để tăng khả năng mở rộng của hệ thống.",
        "experience-job2-desc4": "-Làm việc với Docker và Kubernetes để triển khai ứng dụng trên nền tảng đám mây.",
        "experience-job2-desc5": "-Phối hợp với nhóm frontend để đảm bảo trải nghiệm người dùng mượt mà.",
        "experience-job3-title": "Thực tập sinh - Hỗ trợ CNTT",
        "experience-job3-company": "Tập đoàn DEF",
        "experience-job3-desc1": "-Hỗ trợ cài đặt và bảo trì hệ thống máy tính và mạng nội bộ.",
        "experience-job3-desc2": "-Xử lý sự cố phần cứng và phần mềm, hỗ trợ người dùng.",
        "experience-job3-desc3": "-Viết tài liệu hướng dẫn sử dụng hệ thống nội bộ.",
        "education-title": "Học Vấn",
        "education-degree1": "Cử Nhân Khoa Học Máy Tính",
        "education-university": "Đại học Bình Dương",
        "education-gpa": "-GPA: 3.7/4.0",
        "education-coursework": "-Các môn học liên quan: Cấu trúc dữ liệu & Giải thuật, Kỹ thuật phần mềm, Quản lý cơ sở dữ liệu, Trí tuệ nhân tạo",
        "education-project": "-Đề tài tốt nghiệp: Phát triển hệ thống gợi ý dựa trên học máy cho nền tảng thương mại điện tử bằng Python và TensorFlow.",
        "education-certifications": "Chứng chỉ & Đào tạo",
        "cert-aws": "-Chứng chỉ Kiến trúc Sư Giải Pháp AWS - Associate (2023)",
        "cert-google": "-Chứng chỉ Phân tích Dữ liệu Chuyên nghiệp của Google (2022)",
        "cert-azure": "-Chứng chỉ Cơ bản về Microsoft Azure (AZ-900) (2021)",
        "skills-title": "Kỹ Năng Kỹ Thuật",
        "skills-programming": "Ngôn ngữ lập trình:",
        "skills-languages": "Python, Java, JavaScript, C++, SQL",
        "skills-web": "Phát triển Web",
        "skills-frontend": "Frontend: React.js, Vue.js, HTML, CSS, Tailwind, Bootstrap",
        "skills-database": "Quản lý Cơ sở dữ liệu",
        "skills-db": "MySQL, PostgreSQL, Firebase",
        "skills-language": "Tiếng Anh",
        "skills-english": "Trình độ vẫn ở mức trung bình, đạt khoảng B1, có thể giao tiếp cơ bản nhưng cần cải thiện kỹ năng nghe.",
        "skills-tools": "Công cụ & Kiểm soát phiên bản",
        "skills-tools-list": "Git, GitHub, GitLab, Jira, Postman",
        "contact-title": "Thông Tin Liên Hệ",
        "contact-address": "<i class='fas fa-map-marker-alt'></i> 20, DX82, Định Hòa, Thủ Dầu Một, Bình Dương",
        "contact-email": "<i class='fas fa-envelope'></i> 23050099@student.bdu.edu.vn",
        "contact-phone": "<i class='fas fa-phone'></i> 038 269 6897"
    },
    en: {
        "job-title": "Information Technology",
        "about-title": "About Me",
        "about-name": "Name: Nguyen Manh Phat",
        "about-sex": "Sex: Male",
        "about-dob": "Date of birth: 09-09-2005",
        "about-hometown": "Hometown: Thu Dau Mot, Binh Duong, Viet Nam",
        "favorites-title": "ABOUT MY FAVORITES",
        "fav-badminton": "Badminton",
        "fav-football": "Football",
        "fav-gaming": "Gaming",
        "fav-cooking": "Cooking",
        "experience-title": "Work Experience",
        "experience-job1-title": "Software Engineer",
        "experience-job1-company": "ABC Tech Company",
        "experience-job1-desc1": "-Develop and maintain web applications using React.js and Node.js.",
        "experience-job1-desc2": "-Design and optimize MongoDB and PostgreSQL databases.",
        "experience-job1-desc3": "-Deploy and manage systems on AWS platform (EC2, S3, Lambda).",
        "experience-job1-desc4": "-Collaborate with QA team to test and fix errors, improve system performance.",
        "experience-job1-desc5": "-Build RESTful APIs and integrate with third-party services.",
        "experience-job2-title": "Backend Developer",
        "experience-job2-company": "XYZ Solutions",
        "experience-job2-desc1": "-Design and develop backend systems using Python (Django) and Node.js.",
        "experience-job2-desc2": "-Optimize data query performance and enhance system security.",
        "experience-job2-desc3": "-Build microservices to increase system scalability.",
        "experience-job2-desc4": "-Work with Docker and Kubernetes to deploy applications in cloud environments.",
        "experience-job2-desc5": "-Coordinate with frontend teams to ensure smooth user experience.",
        "experience-job3-title": "Intern - IT Support",
        "experience-job3-company": "DEF Corporation",
        "experience-job3-desc1": "-Support installation and maintenance of computer systems and internal networks.",
        "experience-job3-desc2": "-Handle hardware and software problems and support users.",
        "experience-job3-desc3": "-Write internal system user manuals.",
        "education-title": "Education",
        "education-degree1": "Bachelor of Science in Computer Science",
        "education-university": "Binh Duong University",
        "education-gpa": "-GPA: 3.7/4.0",
        "education-coursework": "-Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Management, Artificial Intelligence",
        "education-project": "-Senior Project: Developed a machine learning-based recommendation system for e-commerce platforms using Python and TensorFlow.",
        "education-certifications": "Certifications & Training",
        "cert-aws": "-AWS Certified Solutions Architect - Associate (2023)",
        "cert-google": "-Google Data Analytics Professional Certificate (2022)",
        "cert-azure": "-Microsoft Azure Fundamentals (AZ-900) (2021)",
        "skills-title": "Technical Skills",
        "skills-programming": "Programming Languages:",
        "skills-languages": "Python, Java, JavaScript, C++, SQL",
        "skills-web": "Web Development",
        "skills-frontend": "Frontend: React.js, Vue.js, HTML, CSS, Tailwind, Bootstrap",
        "skills-database": "Database Management",
        "skills-db": "MySQL, PostgreSQL, Firebase",
        "skills-language": "English",
        "skills-english": "The level is still at an average level, automatically scoring the body level B1, can continue basic communication with foreigners, but still needs improvement in listening.",
        "skills-tools": "Tools & Version Control",
        "skills-tools-list": "Git, GitHub, GitLab, Jira, Postman",
        "contact-title": "My Info",
        "contact-address": "<i class='fas fa-map-marker-alt'></i> 20, DX82, Dinh Hoa, Thu Dau Mot, Binh Duong",
        "contact-email": "<i class='fas fa-envelope'></i> 23050099@student.bdu.edu.vn",
        "contact-phone": "<i class='fas fa-phone'></i> 038 269 6897"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Mặc định hiển thị tiếng Anh
document.addEventListener("DOMContentLoaded", () => {
    setLanguage("en");
});

