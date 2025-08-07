import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { Card } from '../components/Card';

const courses = [
{
title: "Introduction à React",
description: "Découvre les bases de React, les composants, props, hooks, et plus encore.",
slug: "intro-react",
},
{
title: "Node.js pour débutants",
description: "Apprends à créer un backend avec Node.js, Express et MongoDB.",
slug: "nodejs-debutant",
},
{
title: "Concevoir une API REST",
description: "Tout sur les API RESTful, les méthodes HTTP, et la gestion des erreurs.",
slug: "api-rest",
},
];

export default function Courses() {
return (
<>
    <div className="text min-h-screen flex flex-col justify-center items-center p-4 mx-auto sm:p-8 gap-5">
        <Header />
        <h1 className="text-2xl font-bold text-center mb-10 text-indigo-500 mr-12">All Courses</h1>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-[90%] mr-12">
            {courses.map((course) => (
            <Card key={course.slug} title={course.title} description={course.description} slug={course.slug} />
            ))}
        </div>
        <Footer />
    </div>

</>
);
}
