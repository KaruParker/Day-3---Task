// <<Question.No-1>>
// ------------------
// For the given json iterate over all for loops (for, for in, for of, forEach)
// For loop example:-
var a = [
{
    "Name" : "Apple",
    "Vitamin" : "C" },
{
    "Name" : "Banana",
    "Vitamin" : "B6"},
{
    "Name" : "Mango",
    "Vitamin" : "A"}
];
for (var i=0; i<a.length; i++) {
  console.log(a[i]);
}
// Output
// {Name: 'Apple', Vitamin: 'C'}
// {Name: 'Banana', Vitamin: 'B6'}
// {Name: 'Mango', Vitamin: 'A'}

// For-in loop example:
var a = [
{
    "Name" : "Apple",
    "Vitamin" : "C" },
{
    "Name" : "Banana",
    "Vitamin" : "B6"},
{
    "Name" : "Mango",
    "Vitamin" : "A"}
];
for (var Name in a) {
  console.log(Name);
}
// Output
// 0
// 1
// 2

// For-of loop example:
var a = [
{
    "Name" : "Apple",
    "Vitamin" : "C" },
{
    "Name" : "Banana",
    "Vitamin" : "B6"},
{
    "Name" : "Mango",
    "Vitamin" : "A"}
];
for (var Vitamin of a) {
  console.log(Vitamin.Name);
}
// Output
// Apple
// Banana
// Mango

// ForEach loop example:
var a = [
{
    "Name" : "Apple",
    "Vitamin" : "C" },
{
    "Name" : "Banana",
    "Vitamin" : "B6"},
{
    "Name" : "Mango",
    "Vitamin" : "A"}
];
a.forEach((data,index) =>{
    console.log(data,"-->"+index);
});
// Output
// {Name: 'Apple', Vitamin: 'C'} '-->0'
// {Name: 'Banana', Vitamin: 'B6'} '-->1'
// {Name: 'Mango', Vitamin: 'A'} '-->2'
// ===============================================================================

// <<Question.No-2>>
// ------------------
// Create your own resume data in JSON format
var myResume = [ "*** RESUME ***",
{
    "1) Bio":
    {
        "Name":"Karunya Rameshkumar",
        "E-mail":"karunya@gmail.com",
        "Phone":"9876543210",
        "Designation":"Fresher"
    },
    "2) Address": 
    {"Street":"13, xyz Street", 
        "City":"Madurai", 
        "State":"Tamil Nadu",
        "Postal code":"610 002",
        "Country":"India"
    },
    "3) Qualification":
    {"SSLC":"KGHSS - State Board, Madurai",
     "HSC":"KGHSS - State Board, Madurai",
     "UG":"JCTCET - University, Chennai"
    },
    "4) Profile links":
    {"LinkedIn":"www.linkedin.com",
     "Indeed":"www.indeed.com",
     "GitHub":"www.github.in"
    },
    "5) Work Experience":
    {"Online Tutor":"Focus Edumatics.Pvt.Ltd, Coimbatore - 2 years",
     "Clerk":"Shiva Systems, Madurai - 1 year" 
    },
    "6) Languages Known":
    {"Tamil":"Read, Write, Speak - Excellent",
     "English":"Read, Write, Speak - Good"
    },
    "7) Projects":
    {"UG":"An IOT based Manhole Monitoring System",
     "Internship":"GSM based Weather Reporting System"
    },
    "Declaration":"I declare that the information above is true and Correct."
}];
console.log(myResume);
// Output
// "*** RESUME ***"
// 1) Bio: 
// {Name: 'Karunya Rameshkumar', E-mail: 'karunya@gmail.com', Phone: '9876543210', Designation: 'Fresher'}
// 2) Address: 
// {Street: '13, xyz Street', City: 'Madurai', State: 'Tamil Nadu', Postal code: '610 002', Country: 'India'}
// 3) Qualification: 
// {SSLC: 'KGHSS - State Board, Madurai', HSC: 'KGHSS - State Board, Madurai', UG: 'JCTCET - University, Chennai'}
// 4) Profile links: 
// {LinkedIn: 'www.linkedin.com', Indeed: 'www.indeed.com', GitHub: 'www.github.in'}
// 5) Work Experience: 
// {Online Tutor: 'Focus Edumatics.Pvt.Ltd, Coimbatore - 2 years', Clerk: 'Shiva Systems, Madurai - 1 year'}
// 6) Languages Known: 
// {Tamil: 'Read, Write, Speak - Excellent', English: 'Read, Write, Speak - Good'}
// 7) Projects: 
// {UG: 'An IOT based Manhole Monitoring System', Internship: 'GSM based Weather Reporting System'}
// Declaration: 
// "I declare that the information above is true and Correct."
// ====================================================================================================================================
