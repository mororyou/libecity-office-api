import { PrismaClient, User } from '@prisma/client'
import express, { Request, Response } from 'express'

const router = express.Router()
const prisma = new PrismaClient()

// 一覧参照
router.get('/users', async (_req: Request, res: Response) => {
  const users: User[] = await prisma.user.findMany()
  res.json({
    users,
  })
})

// 参照
router.get('/user/:id', async (_req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: String(_req.params?.id) },
  })
  res.json({ user })
})

// 登録
router.post('/user', async (_req: Request, res: Response) => {
  const { name, url, password, avator } = _req.body
  const user = await prisma.user.create({
    data: { name, url, password, avator },
  })
  res.json({ user })
})

// 更新
router.put('/user/:id', async (_req: Request, res: Response) => {
  const { name, url, password, avator } = _req.body
  const user = await prisma.user.update({
    where: { id: String(_req.params?.id) },
    data: { name, url, password, avator },
  })
  res.json({ user })
})

export default router
