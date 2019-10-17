import React, { useState } from 'react'
import Head from 'next/head'
import Header from './../components/Header'
import Author from './../components/Author'
import Advert from './../components/Advert'
import Footer from './../components/Footer'
import { Row, Col, List, Icon} from 'antd'
import './../static/style/pages/index.css'
const Home = () => {
    let lists = [
        {title:'Vue学习之路',context:'也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。'},
        {title:'React学习之路',context:'也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。'},
        {title:'Angular学习之路',context:'也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。'},
    ]
    const [dataLists,setDataLists] = useState(lists)

    return(
            <div>
                <Head>
                    <title>努力努力再努力</title>
                </Head>
                <Header />
                <Row className="comm-main" type="flex" justify="center">
                    <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                        <List
                            header={<div>最新日志</div>}
                            dataSource={dataLists}
                            itemLayout="vertical"
                            renderItem={item =>(
                                <List.Item>
                                    <div className="list-title">{item.title}</div>
                                    <div className="list-icon">
                                        <span><Icon type="calendar" />2019-9-26</span>
                                        <span><Icon type="folder" />视频教程</span>
                                        <span><Icon type="fire" />78969人</span>
                                    </div>
                                    <div className="list-context">{item.context}</div>
                                </List.Item>
                            )}
                        />
                    </Col>

                    <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                        <Author />
                        <Advert />
                    </Col>
                </Row>
                <Footer />
            </div>
    )
}

export default Home
