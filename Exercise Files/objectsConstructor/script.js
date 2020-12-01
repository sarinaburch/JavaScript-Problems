function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var courses = [
new Course("JavaScript Practice", "Me", 1, true, 0),
new Course("Archie101", "Me", 3, true, 3)
]

console.log(courses);
console.log(courses[1].updateViews());