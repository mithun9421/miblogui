import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Heart from "react-animated-heart";
import axios from 'axios';
import Comment from '../../images/comment.svg';
import './style.scss';
import Button from '../common/Button';
import {DEFAULT_CONFIGS} from '../../utls/constants';

export default function BlogDescription({
    id = "123",
    title = "Title goes here...",
    content = "Content goes here...",
    likes,
    comments = []
}) {
    const [likesCount, setLikes] = useState(likes ? likes : 0)
    const [commentList, setcommentList] = useState(comments ? comments : [])
    const [commentInput, setCommentInput] = useState("")
    const [heartClicked, setHeartClick] = useState(false)
    const [commentClicked, setCommentClick] = useState(false)

    const handleHeartClick = () => {
        setHeartClick(true);
        setLikes(likesCount + 1);
        axios.post(DEFAULT_CONFIGS.API_URL + "/api/update-likes", {
            likes: likes + 1,
            id: id,
        })
            .then((response) => {
                console.log("Post successful", response)
            })
            .catch((err) => {
                console.log("error occured")
            })
    }

    const handleCommentSubmit = () => {
        let commentWithDate = {
            comment: commentInput,
            createdDate: (new Date()).getTime()
        }
        console.log("Comment ", [commentWithDate, ...commentList]);
        setcommentList([commentWithDate, ...commentList]);
        setCommentInput("")
        if (commentInput != "") {
            axios.post(DEFAULT_CONFIGS.API_URL + "/api/update-comments", {
                comments: [commentWithDate, ...comments],
                id
            })
                .then((response) => {
                    console.log("Post successfull", response)
                })
                .catch((err) => {
                    console.log("Error occured", err)
                })
        }
    }

    const handleCommentClick = () => {
        setCommentClick(!commentClicked)
    }

    return (
        <div className='blog-description'>
            <div className='wrapper'>
                <div className='blog-title'>{title}</div>
                <div className='blog-content'><MDEditor.Markdown source={content} /></div>
                <div className='blog-interaction'>
                    <div className='heart-icon-container'>
                        <Heart isClick={heartClicked} onClick={handleHeartClick} />
                        <div className='likes-value'>{likesCount}</div>
                    </div>
                    <div className='comment-icon-container'>
                        <button type="button" className="icon-button" onClick={handleCommentClick}>
                            <img src={Comment} alt={"Comment"} className="comment-icon-style" />
                        </button>
                    </div>
                </div>
                {
                    commentClicked &&
                    <div className='comments'>
                        <input type={"text"} value={commentInput} onChange={(e) => { setCommentInput(e.target.value) }} className='title-input' placeholder={`Type to add in your views`} />
                        <Button text={"Submit"} handleClick={handleCommentSubmit} />
                        {
                            commentList?.length == 0 &&
                            <div className="comment-nodata">No comments yet!</div>
                        }
                        {
                            commentList?.map(({ comment, createdDate }) => {
                                return (
                                    <div className='comment-content-wrap'>
                                        <div className='comment-content'>{comment}</div>
                                        {
                                            createdDate &&
                                            <div className='comment-create-date'>{new Date(createdDate).toString()}</div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}
