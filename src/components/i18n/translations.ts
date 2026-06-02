export type Lang = "ru" | "ky" | "en";

const dict = {
  // Header / nav
  "nav.about": { ru: "О ведомстве", ky: "Ведомство тууралуу", en: "About" },
  "nav.services": { ru: "Услуги", ky: "Кызматтар", en: "Services" },
  "nav.standards": { ru: "Стандарты", ky: "Стандарттар", en: "Standards" },
  "nav.certification": { ru: "Сертификация", ky: "Сертификациялоо", en: "Certification" },
  "nav.metrology": { ru: "Метрология", ky: "Метрология", en: "Metrology" },
  "nav.registers": { ru: "Реестры", ky: "Реестрлер", en: "Registers" },
  "nav.appeals": { ru: "Электронная приемная", ky: "Электрондук кабылдама", en: "E-Reception" },

  "header.hotline": { ru: "Горячая линия: 1222", ky: "Ишеним телефону: 1222", en: "Hotline: 1222" },
  "header.cabinet": { ru: "Министрлер Кабинети КР", ky: "Министрлер Кабинети КР", en: "Cabinet of Ministers KR" },
  "header.a11y": { ru: "Версия для слабовидящих", ky: "Көрүүсү начарлар үчүн", en: "Accessibility version" },
  "header.account": { ru: "Личный кабинет", ky: "Жеке кабинет", en: "My account" },
  "header.search": { ru: "Поиск", ky: "Издөө", en: "Search" },
  "header.language": { ru: "Язык", ky: "Тил", en: "Language" },

  // Popular actions
  "popular.kicker": { ru: "Часто используется", ky: "Көп колдонулат", en: "Frequently used" },
  "popular.title": { ru: "Популярные действия", ky: "Популярдуу аракеттер", en: "Popular actions" },
  "action.submit_appeal": { ru: "Подать обращение", ky: "Кайрылуу жөнөтүү", en: "Submit appeal" },
  "action.submit_appeal_desc": { ru: "Электронная приемная", ky: "Электрондук кабылдама", en: "E-reception" },
  "action.check_status": { ru: "Проверить статус обращения", ky: "Кайрылуунун статусу", en: "Check appeal status" },
  "action.check_status_desc": { ru: "По номеру обращения", ky: "Кайрылуу номери боюнча", en: "By appeal number" },
  "action.find_standard": { ru: "Найти стандарт", ky: "Стандартты табуу", en: "Find standard" },
  "action.find_standard_desc": { ru: "База ГОСТ и СТ КР", ky: "ГОСТ жана СТ КР базасы", en: "GOST & ST KR base" },
  "action.check_cert": { ru: "Проверить сертификат", ky: "Сертификатты текшерүү", en: "Verify certificate" },
  "action.check_cert_desc": { ru: "По номеру или QR-коду", ky: "Номери же QR коду боюнча", en: "By number or QR" },
  "action.apply": { ru: "Подать заявку", ky: "Арыз берүү", en: "Apply" },
  "action.apply_desc": { ru: "Онлайн форма", ky: "Онлайн форма", en: "Online form" },
  "action.open_data": { ru: "Открытые данные", ky: "Ачык маалыматтар", en: "Open data" },
  "action.open_data_desc": { ru: "Реестры и API", ky: "Реестрлер жана API", en: "Registers & API" },

  // Appeals page
  "appeals.crumb": { ru: "Электронная приемная", ky: "Электрондук кабылдама", en: "E-reception" },
  "appeals.title": { ru: "Электронная приемная", ky: "Электрондук кабылдама", en: "Electronic reception" },
  "appeals.desc": {
    ru: "Подайте обращение, жалобу, предложение или сообщите о нарушении. Мы рассмотрим ваше обращение в установленные законом сроки.",
    ky: "Кайрылуу, арыз, сунуш бериңиз же бузуу жөнүндө билдириңиз. Мыйзамда белгиленген мөөнөттө кароого алабыз.",
    en: "Submit an appeal, complaint, suggestion or report a violation. We will review it within the legally established term.",
  },
  "appeals.form_title": { ru: "Форма обращения", ky: "Кайрылуу формасы", en: "Appeal form" },
  "appeals.fullname": { ru: "ФИО", ky: "Аты-жөнү", en: "Full name" },
  "appeals.email": { ru: "Email", ky: "Email", en: "Email" },
  "appeals.phone": { ru: "Телефон", ky: "Телефон", en: "Phone" },
  "appeals.type": { ru: "Тип обращения", ky: "Кайрылуу түрү", en: "Appeal type" },
  "appeals.type.complaint": { ru: "Жалоба", ky: "Арыз", en: "Complaint" },
  "appeals.type.suggestion": { ru: "Предложение", ky: "Сунуш", en: "Suggestion" },
  "appeals.type.violation": { ru: "Сообщить о нарушении", ky: "Бузуу жөнүндө билдирүү", en: "Report violation" },
  "appeals.type.question": { ru: "Вопрос", ky: "Суроо", en: "Question" },
  "appeals.type.management": { ru: "Обращение руководству", ky: "Жетекчиликке кайрылуу", en: "Appeal to leadership" },
  "appeals.subject": { ru: "Тема обращения", ky: "Кайрылуунун темасы", en: "Subject" },
  "appeals.message": { ru: "Текст обращения", ky: "Кайрылуунун тексти", en: "Message" },
  "appeals.files": { ru: "Прикрепить файлы", ky: "Файл тиркөө", en: "Attach files" },
  "appeals.files_hint": { ru: "Перетащите файлы сюда или нажмите для выбора (до 10 МБ)", ky: "Файлдарды бул жерге сүйрөңүз же басып тандаңыз", en: "Drag & drop files here or click to select" },
  "appeals.captcha": { ru: "Защита от спама", ky: "Спамдан коргоо", en: "Anti-spam" },
  "appeals.submit": { ru: "Отправить обращение", ky: "Кайрылуу жөнөтүү", en: "Submit appeal" },
  "appeals.submitting": { ru: "Отправка...", ky: "Жөнөтүлүүдө...", en: "Submitting..." },
  "appeals.success": { ru: "Обращение успешно отправлено", ky: "Кайрылуу ийгиликтүү жөнөтүлдү", en: "Appeal submitted successfully" },
  "appeals.success_desc": { ru: "Сохраните номер обращения для отслеживания статуса", ky: "Статусту көзөмөлдөө үчүн номерди сактап коюңуз", en: "Save the appeal number to track status" },
  "appeals.number": { ru: "Номер обращения", ky: "Кайрылуу номери", en: "Appeal number" },
  "appeals.go_status": { ru: "Перейти к проверке статуса", ky: "Статусту текшерүү", en: "Go to status check" },
  "appeals.new": { ru: "Подать ещё одно обращение", ky: "Дагы кайрылуу", en: "Submit another" },
  "appeals.required": { ru: "Обязательное поле", ky: "Милдеттүү талаа", en: "Required field" },
  "appeals.captcha_error": { ru: "Неверный ответ", ky: "Туура эмес жооп", en: "Wrong answer" },

  // Status
  "status.crumb": { ru: "Проверка статуса", ky: "Статусту текшерүү", en: "Status check" },
  "status.title": { ru: "Проверка статуса обращения", ky: "Кайрылуунун статусун текшерүү", en: "Appeal status tracking" },
  "status.desc": { ru: "Введите номер обращения, чтобы посмотреть текущий статус и историю обработки.", ky: "Учурдагы статусту жана тарыхын көрүү үчүн кайрылуу номерин киргизиңиз.", en: "Enter your appeal number to view the current status and processing history." },
  "status.input": { ru: "Номер обращения", ky: "Кайрылуу номери", en: "Appeal number" },
  "status.check": { ru: "Проверить", ky: "Текшерүү", en: "Check" },
  "status.notfound": { ru: "Обращение не найдено", ky: "Кайрылуу табылган жок", en: "Appeal not found" },
  "status.current": { ru: "Текущий статус", ky: "Учурдагы статусу", en: "Current status" },
  "status.history": { ru: "История обработки", ky: "Иштетүү тарыхы", en: "Processing history" },
  "status.s1": { ru: "Получено", ky: "Алынды", en: "Received" },
  "status.s2": { ru: "В обработке", ky: "Иштетүүдө", en: "In processing" },
  "status.s3": { ru: "Передано ответственному сотруднику", ky: "Жоопкер кызматкерге берилди", en: "Assigned to officer" },
  "status.s4": { ru: "Рассмотрено", ky: "Каралды", en: "Reviewed" },
  "status.s5": { ru: "Закрыто", ky: "Жабылды", en: "Closed" },
} as const;

export type TranslationKey = keyof typeof dict;

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  ru: Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, v.ru])) as Record<TranslationKey, string>,
  ky: Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, v.ky])) as Record<TranslationKey, string>,
  en: Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, v.en])) as Record<TranslationKey, string>,
};
