import Admin_Layout from "@/components/Admin_Layout";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@/components/common/Dialog";
import Button from "@/components/common/buttons";

interface Category {
  _id: String;
  id: String;
  category_name: String;
}

const Category = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [categoryDialog, setCategoryDialog] = useState(false);

  const handleDialog = () => {
    setCategoryDialog(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      category_name: e.target[0].value,
    };

    const response_from_api = await fetch(
      "http://localhost:4000/api/v1/category/add-new-category",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response_from_api.json();
    console.log(result);
    setCategoryDialog(false);
    getAllCategory();
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const resonse_fron_api = await fetch(
      "http://localhost:4000/api/v1/category/get-all-category",
      {
        method: "GET",
      }
    );
    const result = await resonse_fron_api.json();
    setAllCategory(result.response);
  };

  const CategoryElement = ({ category_name, _id }: Category) => {
    const [showButton, setShowButton] = useState(false);
    const handleMouse = () => {
      if (showButton) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    const capitalizeFirstLetter = (text: String) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const handleDeleteRequest = async (id: String) => {
      const resonse_fron_api = await fetch(
        `http://localhost:4000/api/v1/category/remove-category/${id}`,
        {
          method: "DELETE",
        }
      );

      const result = await resonse_fron_api.json();
      getAllCategory();
    };

    return (
      <div
        className="mt-2 border-[1px] h-[75px] border-slate-600 rounded-md p-2 text-white hover:border-slate-400 flex items-center justify-between"
        onMouseOver={handleMouse}
        onMouseOut={handleMouse}
      >
        <div className="font-bold">{capitalizeFirstLetter(category_name)}</div>
        <div className={`${showButton ? "flex" : "flex"}`}>
          <DeleteIcon
            className="border-[1px] p-2 border-slate-600 h-[50px] w-[50px] rounded-md hover:cursor-pointer"
            onClick={(e) => handleDeleteRequest(_id)}
          />
          <EditIcon className="ml-3 border-[1px] p-2 border-slate-600 h-[50px] w-[50px] rounded-md hover:cursor-pointer" />
        </div>
      </div>
    );
  };

  return (
    <Admin_Layout>
      <div className="flex p-2 justify-between">
        <div className="min-w-[800px]">
          {allCategory.map((category: Category, index: Number) => {
            return (
              <CategoryElement
                category_name={category.category_name}
                _id={category._id}
                id={"undefined"}
              />
            );
          })}
        </div>
        <div className="w-[300px] flex flex-col justify-center items-center">
          <div
            className="w-[250px] h-[50px] border-[1px] border-slate-600 rounded-md text-white flex items-center justify-center hover:bg-white hover:text-black hover:cursor-pointer"
            onClick={(e) => setCategoryDialog(true)}
          >
            <div>Create New Category</div>
          </div>
          <Dialog isVisible={categoryDialog} onClose={() => handleDialog()}>
            <div className="bg-white rounded-md p-4 bg-[url('/background_Image/backgroundImage.png')] h-[150px] w-[400px]">
              <form
                className="flex flex-col justify-between"
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  name="category-name"
                  className="p-2 border-[1px] border-slate-600 rounded-md focus:outline-none"
                />
                <div className="flex">
                  <Button
                    id={"SAVE_BUTTON"}
                    title="SUBMIT CATEGORY"
                    className={"mt-4"}
                  />
                  <div
                    className="p-2 bg-gray-600 text-white rounded-lg ml-2 mt-4"
                    onClick={() => setCategoryDialog(false)}
                  >
                    CLOSE
                  </div>
                </div>
              </form>
            </div>
          </Dialog>
        </div>
      </div>
    </Admin_Layout>
  );
};

module.exports = Category;
