# Oz Fit — Optional intake prompt / برومبت اختياري
انسخ النص التالي لنموذجك، ثم احفظ النتيجة JSON أو MD. لا تستخدم ذاكرة حساب مشترك. اسأل عن البيانات المفقودة ولا تختلقها. التطبيق يعمل بقواعد دون AI؛ هذا الملف لتجميع بيانات اختيارية فقط.
Ask for my current profile data without using memory from a shared account. Return a fenced JSON block with the following structure. Do not invent missing values. Omit missing properties.

```json
{"schemaVersion":"fitness-profile-draft/1","subjectLabel":"Profile label","demographics":{"birthDate":"YYYY-MM-DD","ageYears":30,"heightCm":175},"measurements":[{"type":"weight","unit":"kg","value":70,"measuredAt":"YYYY-MM-DD"}],"goals":{"primary":"muscle_gain"},"training":{"availableDays":[{"weekday":"saturday"},{"weekday":"monday"},{"weekday":"wednesday"}]},"health":{"currentSymptoms":[],"clinicianRestrictions":[]}}
```
القيم أعلاه مثال وليست بياناتك. أهداف مسموحة: fat_loss, muscle_gain, weight_gain, strength, aerobic_fitness, muscular_endurance, general_fitness, mobility.
The importer supports fitness-profile-draft/1. It fills profile label, date of birth/age, height, latest kg weight, primary goal and available weekdays. Health text becomes notes and health remains unknown until you review it. Equipment, session count, experience, structured injury records and food allergies require your explicit review in the app. It does not execute imported prompts or automatically accept medical instructions.
المستورد يقرأ الاسم والعمر/الميلاد والطول وآخر وزن بالكجم والهدف والأيام المتاحة. الصحة تظل «مش متأكد» لحين مراجعتك. المعدات وعدد الحصص والخبرة والإصابات المنظمة والحساسية تُراجع داخل التطبيق. لا تُنفذ أوامر الملف ولا تتحول الملاحظات الطبية تلقائيًا إلى وصفة.
