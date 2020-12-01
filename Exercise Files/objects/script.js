var course = {
    title: "JavaScript Practice",
    level: 2,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
course.updateViews();