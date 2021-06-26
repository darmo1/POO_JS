const objectLiteral = {
    name: 'Natalia',
    age:'20',
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }

}


//Hacer que natalia apruebe otros cursos
objectLiteral.cursosAprobados.push("Curso de Responsive Design")


//Crear molde

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso)
    // }

}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student('Juanita', 23, ['Introducción a JS', 'Curso de creación de video Juegos'])


class Student2{
    constructor({
        name, 
        age, 
        cursosAprobados : cursosAprobados = []}){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

const miguelito  = new Student2({name: 'Miguelito', age: 24})


const juan1  = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia:{
        twitter: "fjuandc",
        instagram:"fjuandc",
        facebook: undefined
    },
    approvedCourses: [
        "Curso Definitivo de HTML Y CSS",
        "Curso Práctico de HTML Y CSS"
    ],
    leaningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso Responsive Design"
            ]
        },
        {
            name: "Escuela de Video Juegos",
            courses: [
                "Curso Introducción a la Produción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unity 3D"
            ]
        }
    ]
}

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitoFeliz",
    points: 1000,
    socialMedia:{
        twitter: "miguelitofeliz",
        instagram:"miguelito_feliz",
        facebook: undefined
    },
    approvedCourses: [
        "Curso Definitivo de HTML Y CSS",
        "Curso Práctico de HTML Y CSS"
    ],
    leaningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso Responsive Design"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso Data Business",
                "Curso de DataViz",
                "Curso de Tableau"
            ]
        }
    ]
}

class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + this.studentRole, this.likes , "likes")
        console.log(this.content)
    }
}

class Students{
    constructor({
        name, 
        email,
        usename,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }){
        this.name = name, 
        this.email = email,
        this.usename = usename,
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses,
        this.learningPaths = learningPaths
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })

        comment.publicar()
    }



}


class FreeStudent extends Students{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn( " Lo sentimos ", this.name, "Solo puedes tomar este curso")
        }
    }
}

class BasicStudent extends Students{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn( " Lo sentimos ", this.name, "Solo puedes tomar este curso en inglés")
        }
    }
}

class ExpertStudent extends Students{
    constructor(props){
        super(props)
    }
}

class TeacherStudent extends Students{
    constructor(props){
        super(props);    
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        })

        comment.publicar()
    }
}


function videoPlay(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id
    console.log("se esta reproduciendo " , urlSecreta)
}

function videoStop(id){
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id
    console.log("se esta pausando " , urlSecreta)
}

class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)

    }

}



class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;

    }

    get name(){
        return this._name;
    }

    set name(newName){
       if(newName === "Curso Malito de Programación"){
           console.error("Web ... No")
       } else{
        this._name = newName
       } 
    }
    //Recuerda que si quieres asignar el setter entonces debes de llamarlo asi:
    // cursoProgBasica.name = "Nuevo Curso de Programación Básica 2021"
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree : true
    
})

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    lang: "english"
    
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    
})

class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
  });
  
  const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [cursoProgBasica , 'Curso de Estadistica' , 'CursoExcel' ],
  });

  const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    twitter: "fjuandc",
    instagram:"fjuandc",
    facebook: undefined,
    leaningPaths: [escuelaDataScience, escuelaWeb]
})

const miguelitofeliz = new BasicStudent({
    name: "Miguelito",
    username: "miguelitoFeliz",
    twitter: "miguelitofeliz",
    instagram:"miguelito_feliz",
    leaningPaths: [escuelaDataScience, escuelaWeb]
})


const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram:"fredier",
    
})