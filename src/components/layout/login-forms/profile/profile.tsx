import { useState } from 'react'

import { Edit2Outline } from '@/assets'
import { EditProfile, EditProfileData } from '@/components/layout/login-forms/profile/edit-profile'
import { InfoProfile } from '@/components/layout/login-forms/profile/info-profile'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './profile.module.scss'

export type ProfileData = {
  avatar?: string
  email: string
  name: string
  src: string
}

type Props = {
  data: ProfileData
}

export const Profile = ({ data }: Props) => {
  const { email, name, src } = data
  const [editMode, setEditMode] = useState(false)

  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileData) => {
    console.log(data)
    setEditMode(false)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <img alt={name} className={s.avatar} src={src} />
        <div className={s.icon}>
          <Edit2Outline />
        </div>
      </div>
      {editMode ? (
        <EditProfile onSubmit={onSubmit} />
      ) : (
        <InfoProfile email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
