import Layout from "@/components/Layout";
import React from "react";

const MyBlog = () => {
  return (
    <Layout>
      <div id="blog-content-container" className="flex border-2 justify-evenly">
        <div id="blog-page-left" className="w-[800px] pt-8 pb-8 border-[0.5px]">
          <div id="blog-title" className="text-3xl">
            My First Year Days of Fun with Friends and much more.
          </div>
          <div id="blog-publish-date-time" className="mt-2 text-slate-500">03/02/2023 22:37</div>
          <div id="blog-text-content" className="text-lg mt-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            exercitationem fuga maiores similique, optio corrupti consequatur
            placeat necessitatibus velit incidunt laboriosam nulla. Atque
            accusantium ipsa veritatis similique minus consequatur quisquam
            illum voluptatem a. Tempore, asperiores. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quaerat autem odio voluptate sed
            vitae veritatis vero repellendus! Voluptate nostrum suscipit
            reprehenderit pariatur quisquam enim voluptatem atque ea? Quae
            asperiores rerum ipsum alias officiis voluptates eum placeat
            possimus! Corporis suscipit sint quas esse, molestias repudiandae
            praesentium corrupti assumenda asperiores quis, minus culpa ipsa ab
            nisi officia reiciendis velit ducimus, quidem amet harum facilis
            magnam perferendis fuga. Magnam voluptates iure voluptate, ut
            placeat pariatur quae maxime neque sed perferendis ab praesentium
            cupiditate iste facere deleniti, delectus ipsum illum exercitationem
            deserunt reiciendis accusamus blanditiis. Veritatis, libero repellat
            dolores numquam fugit architecto sed temporibus odio dicta
            voluptatem adipisci! Quos, itaque voluptas eum veniam nostrum
            doloribus necessitatibus quo voluptates! Ipsa nulla voluptatem natus
            provident, praesentium soluta dolorem, dolorum debitis repellendus
            eos numquam eligendi, fugiat explicabo voluptates maxime pariatur
            similique tempora aut magnam! Nostrum, deserunt nobis minus, qui
            voluptates ullam cum recusandae laudantium eos doloribus, rerum sit
            officiis enim dolorum voluptatem consequatur sequi repellat
            voluptatum velit tenetur. Consectetur odit incidunt ea fugiat
            molestiae magnam cupiditate facere ex alias rerum architecto,
            voluptatem necessitatibus molestias unde, ipsa quas nihil magni
            quibusdam, quisquam facilis distinctio! Fugit tempora omnis
            explicabo vel quia velit rem optio laborum. Error, fugit quos
            ratione labore totam consequatur? Voluptatibus, dignissimos ullam
            deserunt labore doloribus asperiores dolorum placeat repudiandae a
            temporibus minus inventore repellat earum incidunt expedita quo. Ab
            ipsum molestiae dolor? Iste et quod amet, maxime, alias, soluta
            tempore at quos aliquam veniam distinctio ea tenetur nemo facilis
            rerum magnam! Repellat delectus eligendi non ipsum. Accusamus porro
            nobis itaque praesentium dolore odit, sint veritatis ipsam, non
            veniam numquam voluptatibus error, repellat doloribus vel magni quae
            nesciunt? Sunt fuga autem velit omnis impedit quas animi expedita
            totam ex vero quia earum ea facilis asperiores neque, cupiditate
            eius qui placeat repellat facere, dicta iure voluptas porro
            obcaecati. Dolorem nesciunt voluptatem cupiditate, nulla,
            repellendus non error minima.
          </div>
        </div>
        <div id="blog-page-right" className="border-2 h-96 min-w-[300px]">Next Read</div>
      </div>
    </Layout>
  );
};

export default MyBlog;
