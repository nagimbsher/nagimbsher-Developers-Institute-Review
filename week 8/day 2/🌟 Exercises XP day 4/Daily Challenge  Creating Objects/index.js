// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title,uploder,time){
        this.title = title;
        this.uploder = uploder;
        this.time = time;
    }
    watch(){
        const sentence = `${this.uploder} watched all ${this.time} of ${this.title}`;
        console.log("sentence:",sentence); 
    }

}
// const vid1 = new Video ("master ben","nagim","2 hour");
// const vid2 = new Video ("breaking bad","mike","80 hours");
// vid1.watch();
// vid2.watch();

// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

const videosData = [
   { uploder:"naigm",
    time:"1 hour",
    title:"breaking news"
},
{
    uploder:"basher",
     time:"11 hour",
    title:"breaking bad"
},
   { uploder:"jogn",
    time:"3 hour",
    title:"Better Call Saul"
},
{
   uploder:"eli",
   time:"2 hour",
   title:"Titanic"
},
{ 
    uploder:"adam",
    time:"3 hour",
    title:"The Big Bang Theory"
},
{
    uploder:"moa",
     time:"10 minutes",
    title:"little Miss Sunshing "
}
];

// const videos = [];
// for (const{uploder,time,title} of videoDate){
//     const video = new video(title,uploder,time);
//     videos.push(video);
// }
// console.log(videos);

const videos= videosData.map
(({title,uploder,time}) => new Video(title,uploder,time));



 console.log(videos);
























































