import {insight} from "../models/insight.js"
import  cheerio from 'cheerio';
import axios from "axios";

function countWords(text) {
   return text.split(/\s+/).filter(word => word.length > 0).length;
 }

export const GetAllinsights=async(req,res,next)=>{
 const {id}=req.params
 let item
 try{
   item=await insight.find({userid:id})
 }catch(error){

 }
 res.json({
    status:true,
    data:item
 })
}

export const CreateInsight=async(req,res,next)=>{
   try{

         const {domain,userId}=req.body

         if(domain=='' || !domain || !userId || userId==''){
                  res.status(500).json({status:false})
         }

         const response = await axios.get(domain)
         
         if (response.status === 200) {
            const htmlContent = response.data;
            const $ = cheerio.load(htmlContent);
            $('script').remove()
            $('style').remove()
            $('iframe').remove()
            $('noscript').remove()
            const extractedText = $('html').text()
            console.log(extractedText)
            const wordCount = countWords(extractedText);
            console.log(wordCount,userId,domain)
            let item=await insight.findOne({
               userid:userId,
               DomainName:domain
            })
            if(item){
               item.WordCount=wordCount
               await item.save()
            }else{
               await insight.create({
                  userid:userId,
                  DomainName:domain,
                  WordCount:wordCount,
                  fav:false
               })
            }
            res.status(200).json({
               status:true
            })
         }else{
            res.status(500).json({status:false})
         }
}
 catch(erro){
   console.log(erro)
 }
}

export const DeleteInsight=async(req,res,next)=>{
   try{
      const {id}=req.body
      const item=await insight.findOneAndDelete(
         {
            _id:id
         },
      )
      if(item){
         res.status(200).json({
            status:true
         })
      }
      else(
         res.status(400).json({
            status:false
         })
      )
   }catch(error){
    console.log(error)
   }
}
export const UpdateInsight=async(req,res,next)=>{
try{
   const {id}=req.body
   const item=await insight.findOneAndUpdate(
      {
         _id:id
      },
      {
         fav:true
      }
   )
   if(item){
      res.status(200).json({
         status:true
      })
   }
   else(
      res.status(400).json({
         status:false
      })
   )
}catch(error){
 console.log(error)
}
}

