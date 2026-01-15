import { Request, Response, Router } from "express";
import { Task } from "../models/task.model";
import { isTask } from "../utils/tasks.utils";
import { isString } from "../utils/guards";

export const tasksController = Router();

const allTasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
];

/**
 * This function returns all the tasks
 */
tasksController.get("/", (req: Request, res: Response) => {
  console.log("[GET] /tasks/");
  res.status(200).json(allTasks);
});


tasksController.post("/", (req: Request, res: Response) => {
  console.log("[POST] /tasks/");
  const task : Task = req.body;
  if(!isTask(task)) {
    res.status(400).send("Missing fields or invalid data");
    return;
  }
  task.id = allTasks.length + 1;
  allTasks.push(task);
  res.status(200).json(task);
});

tasksController.delete("/:id", (req : Request, res : Response) => {
  console.log("[DELETE] /tasks/:id");
  if(!isString(req.params.id)){
    return res.sendStatus(400);
  }
  const id = Number(req.params.id);
  if(isNaN(id)){
    return res.sendStatus(400);
  }

  const index = allTasks.findIndex(t => t.id === id);
  if(index === -1){
    return res.sendStatus(404);
  }

  return res.json(allTasks.splice(index, 1));
})