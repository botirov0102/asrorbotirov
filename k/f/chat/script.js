




// Chatbot responses object (80 questions and answers)
const responses = {
    "salom": "Salom: qaysi bolim haqida malumot kerak?",
    "qaysi bolimlar mavjud": "Bizning saytimizda hozircha: CodeExpert, UzPay, Create Portfolio, My Portfolio, va Men borman.",
    "CodeExpert": "CodeExpert: bu online tarzda ochilgan o'quv kurs bo'lib, mobil dasturlash bo'yicha bilim beriladi.",
    "o'quv kurs narxi qancha": "O'quv kurs narxi: 299 ming som.",
    "kurs necha oy davom etadi": "Kurs: 3 oy davom etadi.",
    "CodeExpert haqida qanday ma'lumot olish mumkin?": "CodeExpert: bu onlayn dasturlash o'quv kursi bo'lib, mobil dasturlashni o'rganish uchun imkoniyat yaratadi. Kurs 3 oylik va o'quvchilar real loyihalar ustida ishlashni o'rganadilar.",
    "CodeExpert haqida to'liq ma'lumot bering": "CodeExpert haqida to'liq ma'lumot olish uchun saytimizni ko'rib chiqing. Biz mobil dasturlashni o'rganish, amaliyot qilish va real dunyo loyihalarini ishlab chiqish imkoniyatini taqdim etamiz.",
    "UzPay nima?": "UzPay: bu O'zbekistonda gaz va elektr uchun to'lovlarni amalga oshirish tizimi. Bu tizim orqali siz o'zingizning iste'mol qilgan gaz va elektrni to'lash imkoniyatiga egasiz.",
    "UzPay haqida to'liq ma'lumot bering": "UzPay tizimi orqali O'zbekistonda gaz va elektr energiyasi uchun to'lovlarni amalga oshirish mumkin. Narxlar: Gaz: 650 so'm, Elektr: 450 so'm.",
    "Register nima?": "Register: bu CodeExpert saytida o'quv kursiga ro'yxatdan o'tish imkoniyatini taqdim etadigan bo'limdir. O'quvchilar ro'yxatdan o'tish orqali kurslarga kirish huquqiga ega bo'lishadi.",
    "Register bo'limi haqida ma'lumot bering": "Register bo'limi orqali siz CodeExpert kurslariga ro'yxatdan o'tishingiz mumkin. Ro'yxatdan o'tish jarayonida shaxsiy ma'lumotlar va aloqa ma'lumotlarini kiritishingiz talab qilinadi.",
    "Create Portfolio nima?": "Create Portfolio: bu CodeExpert platformasida o'zingizni tanishtirish uchun portfoliongizni yaratish imkoniyatidir. Bu orqali sizning barcha ishlaringiz va loyihalaringizni taqdim etishingiz mumkin.",
    "Create Portfolio haqida to'liq ma'lumot bering": "Create Portfolio bo'limi orqali siz o'z portfoliongizni yaratishingiz mumkin. Bu bo'limda siz o'zingizning yaratgan dasturiy ta'minotlaringizni, ilovalaringizni va boshqa loyihalaringizni ko'rsatishingiz mumkin.",
    "ChatBot nima?": "ChatBot: bu avtomatik javob berish tizimi bo'lib, foydalanuvchilar tomonidan berilgan savollarga tez va samarali javoblarni taqdim etadi.",
    "ChatBot haqida to'liq ma'lumot bering": "ChatBot: bu internetda ishlovchi avtomatik tizim bo'lib, foydalanuvchilar tomonidan berilgan savollarga javob berish uchun ishlab chiqilgan. U so'rovlar orqali foydalanuvchilarga yordam berishda yordam beradi.",
    "o'quv kursining muddati qancha?": "Kursimiz: 3 oy davom etadi.",
    "o'quv kursini boshlash uchun nima qilish kerak?": "Kursni boshlash uchun saytimizda ro'yxatdan o'ting va to'lovni amalga oshiring.",
    "kursni kimlar uchun tavsiya qilasiz?": "Kursimiz: mobil dasturlashni o'rganishni xohlagan har bir inson uchun tavsiya qilinadi.",
    "CodeExpert kursining qanday afzalliklari bor?": "CodeExpert kursining afzalliklari: onlayn format, real loyihalar ustida ishlash, amaliy ko'nikmalarni o'rganish.",
    "savol bering": "Sizga qanday yordam bera olishim mumkin?",
    "kursni qanday tugatish mumkin?": "Kursni tugatish uchun barcha modullarni muvaffaqiyatli o'tgan holda yakunlashingiz kerak.",
    "kursni tugatgach qanday sertifikat olaman?": "Kursni muvaffaqiyatli tugatganingizda sizga CodeExpert sertifikati beriladi.",
    "kursga ro'yxatdan o'tish qanday amalga oshiriladi?": "Kursga ro'yxatdan o'tish uchun saytimizda mavjud bo'lgan ro'yxatga olish formasi orqali murojaat qilishingiz mumkin.",
    "chatbot qanday ishlaydi?": "ChatBot foydalanuvchi tomonidan yuborilgan savollarga javob berish uchun avtomatik javoblar tizimidan foydalanadi.",
    "mobil dasturlashni o'rganish qanchalik muhim?": "Mobil dasturlashni o'rganish sizni bugungi kunda yuqori talabda bo'lgan professionallarga aylantiradi.",
    "firebase nima?": "Firebase: bu Google tomonidan taqdim etilgan backend platformasi bo'lib, mobil va veb ilovalar uchun xizmatlar taqdim etadi.",
    "mobile app yaratish uchun qanday dasturlar ishlatiladi?": "Mobil ilovalar yaratish uchun asosan JavaScript, React Native, Kotlin va Swift kabi dasturlash tillari ishlatiladi.",
    "UzPay tizimi qanchalik xavfsiz?": "UzPay tizimi yuqori xavfsizlik standartlariga ega va barcha tranzaksiyalarni shifrlaydi.",
    "chatbot qanday yaratish mumkin?": "ChatBot yaratish uchun HTML, CSS, va JavaScript tillaridan foydalanish mumkin.",
    "chatbot qayerda ishlatiladi?": "ChatBot ko'plab sohalarda, jumladan, mijozlarga xizmat ko'rsatish, savdo, va foydalanuvchi yordamida ishlatiladi.",
    "mobil ilova yaratishda nimalarga e'tibor berish kerak?": "Mobil ilova yaratishda foydalanuvchi interfeysi, tezlik va xavfsizlikka alohida e'tibor qaratish kerak.",
    "O'zbekistonda mobil dasturchilarga qanday talab bor?": "O'zbekistonda mobil dasturchilarga talab ortib bormoqda va bu sohada yuqori ish o'rinlari mavjud.",
    "kursingizda qanday materiallar mavjud?": "Kursimizda interaktiv video darslar, amaliy mashg'ulotlar va loyihalar mavjud.",
    "kursni tugatganimda qanday ish topishim mumkin?": "Kursni tugatgach, siz mobil dasturchi sifatida ish topishingiz mumkin.",
    "kurs davomida qanday yordam olish mumkin?": "Kurs davomida siz mentorlar va guruh yordami orqali yordam olishingiz mumkin.",
    "kurs davomida qaysi dasturlarni o'rganamiz?": "Kurs davomida siz React Native, Firebase, JavaScript kabi dasturlash tillarini o'rganasiz.",
    "kursni boshlash uchun qanday talablar mavjud?": "Kursni boshlash uchun faqat internetga kirish imkoniyatingiz bo'lishi kerak.",
    "CodeExpert kursida qanday imtihonlar bo'ladi?": "Kursda yakuniy imtihonlar va loyihalarni himoya qilish talab etiladi.",
    "kursga kirish uchun nima qilishim kerak?": "Kursga kirish uchun ro'yxatdan o'tish va to'lovni amalga oshirishingiz kerak.",
    "mobil dasturlashni qanday boshlayman?": "Mobil dasturlashni boshlash uchun CodeExpert kursiga qatnashing va kerakli darslarni o'rganing.",
    "uzPayga qanday ulanish mumkin?": "UzPay tizimiga ulanish uchun rasmiy hujjatlar va integratsiya qadamlarini o'rganing.",
    "chatbotni qanday sozlash mumkin?": "Chatbotni sozlash uchun HTML, CSS va JavaScriptdan foydalanishingiz kerak.",
    "chatbotga qanday yordam bera olishim mumkin?": "Chatbot yordamida siz CodeExpert kurslari, UzPay va boshqa savollarga javob olishingiz mumkin.",
    "chatbotni qanday rivojlantiraman?": "Chatbotni rivojlantirish uchun yangi savollar qo'shing va javoblarni yangilang.",
    "kursni kimlar uchun boshlash mumkin?": "Kursni boshlash uchun dasturlashni o'rganishga qiziqqan har bir kishi ro'yxatdan o'tishi mumkin.",
    "kurs qanday tuzilgan?": "Kurs video darslar, amaliy mashg'ulotlar va guruh ishlari bilan tuzilgan.",
    "chatbotni qanday foydalanaman?": "Chatbotdan foydalanish uchun matn oynasiga savol yozing va javob oling.",
    "kursda qanday asboblar ishlatiladi?": "Kursda JavaScript, React Native, HTML, va CSS asboblari ishlatiladi.",
    "mobil dasturlashni o'rganish qanday foyda beradi?": "Mobil dasturlashni o'rganish sizga o'z ilovalarini yaratish, ish topish va yuqori daromad olish imkoniyatini beradi.",
    "kursni qanday to'lash mumkin?": "Kursni to'lash uchun saytda mavjud bo'lgan to'lov usullaridan birini tanlashingiz mumkin.",
    "chatbotni qanday yangilash mumkin?": "Chatbotni yangilash uchun yangi savollar va javoblarni JavaScript faylida kiritishingiz kerak.",
};
// Send message function
function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) return;

    addMessage(userInput, 'user');  // Add user message
    document.getElementById('userInput').value = '';  // Clear input field

    console.log('Foydalanuvchi so\'rovi:', userInput);  // Kiritilgan matnni konsolga chiqarish

    const lowerCaseInput = userInput.toLowerCase();  // Convert input to lowercase
    let botResponse = responses[lowerCaseInput];  // Get response from object

    console.log('Javob:', botResponse);  // Javobni konsolga chiqarish

    // If no response found, send default message
    if (!botResponse) {
        botResponse = "Kechirasiz, savolingizni tushunmadim. Iltimos, qayta so'rang.";
    }

    // Delay bot response by 1 second (1000ms)
    setTimeout(() => {
        addMessage(botResponse, 'bot');  // Add bot response with delay
    }, 1000);
}

// Function to add messages to the chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);

    // Split message into multiple lines (inserting gaps between sentences)
    const messageWithGaps = message.split('. ').join('.<br><br><br>');  // Split sentences and add gap
    messageDiv.innerHTML = messageWithGaps;  // Use innerHTML to allow line breaks
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom

    // Add animation for bot message
    if (sender === 'bot') {
        messageDiv.classList.add('fadeIn');  // Add fade-in animation for bot messages
    }
}

// Event listener for enter key
document.getElementById('userInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});