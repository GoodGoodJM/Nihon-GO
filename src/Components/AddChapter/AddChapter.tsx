import React from 'react'
import styled from 'styled-components'
import ChapterBase, { ChapterBaseProps } from '../ChapterBase'
import AddIcon from '@material-ui/icons/Add'

const ChapterButton = styled(ChapterBase).attrs({
  variant: 'outlined'
})<AddChapterProps>`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export type AddChapterProps = Omit<ChapterBaseProps, 'variant' | 'to'>

const AddChapter = (props: AddChapterProps) =>
  <ChapterButton to='chapter' {...props}>
    <AddIcon />
  </ChapterButton>

export default AddChapter
