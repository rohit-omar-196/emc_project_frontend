import Layout from "@/components/Layout";
import Comment from "@/components/common/comment";
import React from "react";
import Subscribe from "@/components/common/subscribe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MyBlog = () => {
  return (
    <Layout>
      <div id="blog-content-container" className="flex justify-evenly py-2">
        <div
          id="blog-page-left"
          className="w-[850px] p-2 pt-8 pb-8 border-[0.5px] border-slate-600 rounded-lg shadow-lg"
        >
          <div id="blog-title" className="text-3xl text-white">
            My First Year Days of Fun with Friends and much more.
          </div>
          <div id="blog-publish-date-time" className="mt-2 text-slate-300">
            03/02/2023 22:37
          </div>
          <div
            id="blog-text-content"
            className="text-lg mt-8 text-justify text-slate-300"
          >
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
          </div>
          <Subscribe />
          <Comment comment={""}></Comment>
        </div>
        <div
          id="blog-page-right"
          className="p-2 h-[200px] w-[300px] sticky top-0 border-[1px] border-slate-600 shadow-md rounded-md bg-[url('/background_Image/author-note-bg.png')] bg-center flex flex-col items-center"
        >
          <div>
            <div className="h-[100px] w-[100px] border-[2px] border-[#ff006e] rounded-full bg-[url('/background_Image/rupesh_author.JPG')] bg-contain mt-2"></div>
          </div>
          <div className="mt-6 h-full w-full border-[1px] border-slate-600 rounded-md text-sky-400 p-2 flex justify-evenly">
            <div>
              <FavoriteIcon className="mr-2 hover:cursor-pointer" />
              73
              <FavoriteBorderIcon className="mr-2 hover:cursor-pointer"/>
            </div>
            <div className="border-[1px] border-sky-600"></div>
            <div>
              <ModeCommentIcon className="mr-2" />
              108
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyBlog;
