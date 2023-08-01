let now = new Date();
let date = new Date();
let listData = [
   {
      name: 'Иван',
      surname: 'Иванович',
      firstname: 'Иванов',
      birthday: new Date([2002, 7, 21]),
      faculty: 'ФСТ',
      entryYear: new Date([9, 1, 2019]),
   },
   {
      name: 'Александр',
      surname: 'Владимирович',
      firstname: 'Голубятников',
      birthday: new Date([2002, 5, 30]),
      faculty: 'ФИТ',
      entryYear: new Date([9, 1, 2020]),
   },
   {
      name: 'Александр',
      surname: 'Александрович',
      firstname: 'Пушкин',
      birthday: new Date([1999, 1, 6]),
      faculty: 'СТФ',
      entryYear: new Date([9, 1, 2018]),
   },
   {
      name: 'Данил',
      surname: 'Данилович',
      firstname: 'Сидоров',
      birthday: new Date([2000, 12, 10]),
      faculty: 'ФЭАТ',
      entryYear: new Date([9, 1, 2017]),
   },
   {
      name: 'Евгений',
      surname: 'Викторович',
      firstname: 'Петров',
      birthday: new Date([2001, 8, 20]),
      faculty: 'ФИТ',
      entryYear: new Date([9, 1, 2020]),
   },
];

let sortPoint = '',
   sortDirPoint = true;

const $app = document.getElementById('app'),
   $addForm = document.getElementById('add-form');
const $table = document.createElement('table');
$table.classList.add('table');
const $thead = document.createElement('thead');
const $tbody = document.createElement('tbody');
const $theadTr = document.createElement('tr');
const $theadThFIO = document.createElement('th');
const $theadThBirthday = document.createElement('th');
const $theadThFaculty = document.createElement('th');
const $theadThEntryYear = document.createElement('th');
const $filterFio = document.getElementById('form-filter__fio-inp');
const $filterFaculty = document.getElementById('form-filter__faculty-inp');
const $filterStartLern = document.getElementById('form-filter__startLern-inp');
const $filterEndLern = document.getElementById('form-filter__endLern-inp');
const $filterForm = document.getElementById('form-filter');

$theadThFIO.textContent = 'ФИО';
$theadThFaculty.textContent = 'Факультет';
$theadThBirthday.textContent = 'Год рождения (возраст)';
$theadThEntryYear.textContent = 'Годы обучения (курс)';

$theadTr.append($theadThFIO);
$theadTr.append($theadThFaculty);
$theadTr.append($theadThBirthday);
$theadTr.append($theadThEntryYear);
$thead.append($theadTr);
$table.append($thead);
$table.append($tbody);
$app.append($table);

function render(arrData) {
   $tbody.innerHTML = '';

   let copyListData = [...arrData];

   for (const oneUser of copyListData) {
      oneUser.fio = oneUser.firstname + ' ' + oneUser.name + ' ' + oneUser.surname;
   }

   copyListData = copyListData.sort(function(a,b){

      let sort = a[sortPoint] < b[sortPoint]

      if (sortDirPoint == false) sort = a[sortPoint] > b[sortPoint];

      if (sort) return -1;
   })

   if ($filterFaculty.value.trim() !== '')
   copyListData = copyListData.filter(function(item) {
      if (item.faculty.includes($filterFaculty.value.trim())) return true
   })

   if ($filterFio.value.trim() !== '')
   copyListData = copyListData.filter(function(item) {
      if (item.fio.includes($filterFio.value.trim())) return true
   })

   if ($filterStartLern.value.trim() !== '')
   copyListData = copyListData.filter(function(item) {
      if (item.entryYear.getFullYear() == $filterStartLern.value.trim()) return true
   })

   if ($filterEndLern.value.trim() !== '')
   copyListData = copyListData.filter(function(item) {
      if (item.entryYear.getFullYear() + 4 == $filterEndLern.value.trim()) return true
   })

   for (const oneUser of copyListData) {

      function getDate(date) {
         let result = date.getDate() < 10 ? '0' + date.getDate() + '.' : date.getDate() + '.';

         result = result + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) + '.' : (date.getMonth() + 1) + '.')

         result = result + date.getFullYear()

         return result;
      }

      const $userTr = document.createElement('tr');
      const $userThFIO = document.createElement('th');
      const $userThBirthday = document.createElement('th');
      const $userThFaculty = document.createElement('th');
      const $userThEntryYear = document.createElement('th');
      $userThFIO.textContent = oneUser.fio;
      if (oneUser.birthday.getDate() >= now.getDate() && oneUser.birthday.getMonth() >= now.getMonth()) {
         $userThBirthday.textContent = `${getDate(oneUser.birthday)}(${(now.getFullYear() - oneUser.birthday.getFullYear()) - 1})`
      } else {
         $userThBirthday.textContent = `${getDate(oneUser.birthday)}(${now.getFullYear() - oneUser.birthday.getFullYear()})`
      }
      $userThFaculty.textContent = `${oneUser.faculty}`;
      if (now.getFullYear() - oneUser.entryYear.getFullYear() > 4 && oneUser.entryYear.getMonth(oneUser.entryYear.getFullYear() + 4) > now.getMonth(oneUser.entryYear.getFullYear() + 4)) {
         $userThEntryYear.textContent = `${oneUser.entryYear.getFullYear()}-${oneUser.entryYear.getFullYear() + 4}(Закончил)`
      } else if ((now.getFullYear() - oneUser.entryYear.getFullYear()) == 0) {
         $userThEntryYear.textContent = `${oneUser.entryYear.getFullYear()}-${oneUser.entryYear.getFullYear() + 4}(1 курс)`
      } else {
         $userThEntryYear.textContent = `${oneUser.entryYear.getFullYear()}-${oneUser.entryYear.getFullYear() + 4}(${now.getFullYear() - oneUser.entryYear.getFullYear()} курс)`
      }


      $userTr.append($userThFIO);
      $userTr.append($userThFaculty);
      $userTr.append($userThBirthday);
      $userTr.append($userThEntryYear);
      $tbody.append($userTr);

   }
}
render(listData)

$addForm.addEventListener('submit', function (event) {
   event.preventDefault;

   const $firstnameInp = document.getElementById('add-form__firstname-inp');
   const $nameInp = document.getElementById('add-form__name-inp');
   const $surnameInp = document.getElementById('add-form__surname-inp');
   const $facultyInp = document.getElementById('add-form__faculty');
   const $entryYearInp = document.getElementById('add-form__entry-year');
   const $birthdayInp = document.getElementById('add-form__birthday');

   listData.push({
      name: $nameInp.value.trim(),
      surname: $surnameInp.value.trim(),
      firstname: $firstnameInp.value.trim(),
      birthday: new Date($birthdayInp.value.trim()),
      faculty: $facultyInp.value.trim(),
      entryYear: new Date($entryYearInp.value.trim()),
   });
   $nameInp.value = '';
   $surnameInp.value = '';
   $firstnameInp.value = '';
   $birthdayInp.value = '';
   $facultyInp.value = '';
   $entryYearInp.value = '';
   render(listData)
})

$theadThFIO.addEventListener('click', function(){
   sortPoint = 'fio';
   sortDirPoint=true;
   render(listData)
})

$theadThFaculty.addEventListener('click', function(){
   sortPoint = 'faculty';
   sortDirPoint=true;
   render(listData)
})

$theadThBirthday.addEventListener('click', function(){
   sortPoint = 'birthday';
   sortDirPoint = false;
   render(listData)
})

$theadThEntryYear.addEventListener('click', function(){
   sortPoint = 'entryYear';
   sortDirPoint = false;
   render(listData)
})

$filterForm.addEventListener('submit', function(e){
   e.preventDefault();
});

$filterFio.addEventListener('input',function(){
   render(listData)
})

$filterFaculty.addEventListener('input',function(){
   render(listData)
})

$filterStartLern.addEventListener('input',function(){
   render(listData)
})

$filterEndLern.addEventListener('input',function(){
   render(listData)
})